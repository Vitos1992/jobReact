import Button from "./Button/Button";
import { useState } from "react";

export default function Feedback() {

    const [name, setName] =  useState('')
    const [services, setServices] =  useState('teamlid')

    function handLeNameCange(event) {
        setName(event.target.value)
    }
    
    return (
        <section className="feedback">
            <div>
                <h1 className="title_section">Feedback</h1>

                <from className="form_box">
                    <div className="services_from">
                        <label htmlFor="name" className="form_label">First Name</label>
                        <input type="text" id="name" className="control" value={name} onChange={handLeNameCange} />

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

                    <Button className="send_btn">SEND</Button>
                </from>
            </div>
        </section>
    );
}
