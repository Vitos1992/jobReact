// import './App.css'
import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
    return (
        <section className="tabs">
            <Button className='tabs_btn' isActive={active === 'ourTeam'} aria-pressed={active === 'ourTeam'} onClick={() => onChange('ourTeam')}>Our Team</Button>
            <Button className='tabs_btn' isActive={active === 'feedback'} aria-pressed={active === 'feedback'} onClick={() => onChange('feedback')}>Feedback</Button>
        </section>
    );

}
