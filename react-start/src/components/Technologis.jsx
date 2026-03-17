import WayToTech from "../components/WayToTech.jsx";
import { ways } from "../components/data.js";

export default function Technologis() {
    return (
        <section className="technologis">
            <h2 className="title_section">Technologis</h2>

            <ul className="list list_ways">
                {/* тернарний оператор з методом (.map()) завдяки якому 
                    масив перебразовуємо в компонент <WayToTech { ...way} /> */}
                {ways.map((way, index) => (
                    <WayToTech key={way.title} {...way} delay={index * 0.2} />
                ))}
            </ul>
        </section>
    );
}
