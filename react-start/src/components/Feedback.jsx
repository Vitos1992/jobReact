import Button from "./Button/Button";
import { useState } from "react";

export default function Feedback() {

    const [name, setName] =  useState('')
    const [services, setServices] =  useState('teamlid')
    const [status, setStatus] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const trimmedName = name.trim();
        if (!trimmedName) {
            setStatus('Введіть ім’я.');
            return;
        }
        try {
            const stored = JSON.parse(localStorage.getItem('jobReact.feedback') || '[]');
            const entries = Array.isArray(stored) ? stored : [];
            entries.push({ name: trimmedName, services, createdAt: new Date().toISOString() });
            localStorage.setItem('jobReact.feedback', JSON.stringify(entries));
            setName('');
            setStatus('Відгук збережено в цьому браузері.');
        } catch {
            setStatus('Не вдалося зберегти відгук. Спробуйте ще раз.');
        }
    }

    function handLeNameCange(event) {
        setName(event.target.value)
    }
    
    return (
        <section className="feedback">
            <div>
                <h1 className="title_section">Feedback</h1>

                <form className="form_box" onSubmit={handleSubmit}>
                    <div className="services_from">
                        <label htmlFor="name" className="form_label">First Name</label>
                        <input type="text" name="name" required id="name" className="control" value={name} onChange={handLeNameCange} />

                        <label htmlFor="services" className="form_label">Services</label>
                        <select id="services" className="control_select" value={services} onChange={event => setServices(event.target.value)} >
                            <option className="control_option" value="teamlid">Team lid</option>
                            <option className="control_option" value="front-end">Front-end develepor</option>
                            <option className="control_option" value="back-end">Back-end develepor</option>
                        </select>
                    </div>

                    {/* <pre>
                        Name: {name}
                        <br />
                        Services: {services}
                    </pre> */}

                    <Button type="submit" className="send_btn">SEND</Button>
                    <p className="text" role="status">{status}</p>
                </form>
            </div>
        </section>
    );
}
