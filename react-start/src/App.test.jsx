import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { StrictMode } from 'react';
import App from './App.jsx';
import Header from './components/Header.jsx';
import Feedback from './components/Feedback.jsx';
import Button from './components/Button/Button.jsx';

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
  localStorage.clear();
});

describe('regressions', () => {
  it('keeps one clock timer through updates and clears it on unmount', () => {
    vi.useFakeTimers();
    const view = render(<StrictMode><Header /></StrictMode>);
    expect(vi.getTimerCount()).toBe(1);
    act(() => vi.advanceTimersByTime(5000));
    expect(vi.getTimerCount()).toBe(1);
    view.unmount();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('shows only the selected section and exposes its active state', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeTruthy();
    const team = screen.getByRole('button', { name: 'Our Team' });
    fireEvent.click(team);
    expect(screen.queryByRole('textbox')).toBeNull();
    expect(screen.getByRole('heading', { name: 'Our Team' })).toBeTruthy();
    expect(team.getAttribute('aria-pressed')).toBe('true');
    fireEvent.click(screen.getByRole('button', { name: 'Feedback' }));
    expect(screen.getByRole('textbox')).toBeTruthy();
    expect(screen.queryByRole('heading', { name: 'Our Team' })).toBeNull();
  });

  it('saves a trimmed name and selected service without navigating', () => {
    render(<Feedback />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '  Vitalii  ' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'front-end' } });
    fireEvent.click(screen.getByRole('button', { name: 'SEND' }));
    expect(JSON.parse(localStorage.getItem('jobReact.feedback'))).toEqual([
      expect.objectContaining({ name: 'Vitalii', services: 'front-end' }),
    ]);
    expect(screen.getByRole('textbox').value).toBe('');
    expect(screen.getByRole('status').textContent).toContain('збережено');
  });

  it('rejects whitespace-only feedback', () => {
    render(<Feedback />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '   ' } });
    fireEvent.click(screen.getByRole('button', { name: 'SEND' }));
    expect(localStorage.getItem('jobReact.feedback')).toBeNull();
  });

  it('preserves the entered name and reports storage failure', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('quota'); });
    render(<Feedback />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Vitalii' } });
    fireEvent.click(screen.getByRole('button', { name: 'SEND' }));
    expect(screen.getByRole('textbox').value).toBe('Vitalii');
    expect(screen.getByRole('status').textContent).toContain('Не вдалося');
  });

  it('forwards button classes, attributes and click handlers', () => {
    const onClick = vi.fn();
    render(<Button className="send_btn" type="submit" aria-label="Save" onClick={onClick}>SEND</Button>);
    const button = screen.getByRole('button', { name: 'Save' });
    expect(button.classList.contains('send_btn')).toBe(true);
    expect(button.type).toBe('submit');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });
});
