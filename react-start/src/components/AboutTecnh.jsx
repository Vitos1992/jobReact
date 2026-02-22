import Button from '../components/Button/Button.jsx';
import { useState } from "react";
import { listNext } from '../components/data.js';


export default function AboutTech() {
    const [contentType, setContentType] = useState(null);

    function handOnClick(type) {
        setContentType(type);
    }

    return (
    <section className="about">
        <h2>About us</h2>
        <div className="btn_section">
            <Button onClick={() => handOnClick("next")}>Next</Button>
            <Button onClick={() => handOnClick("priveus")}>Priveus</Button>
        </div>

        {/* тернарний оператор */}
        {!contentType && <p className="text_content">НАТИСНИ КНОПКУ</p>}
        {contentType && <p className="text_content">{listNext[contentType]}</p>}
    </section>
    );
}
