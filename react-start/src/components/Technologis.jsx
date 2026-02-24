import WayToTech from "../components/WayToTech.jsx";
import { ways } from "../components/data.js";

export default function Technologis() {
    return (
        <section className="technologis">
            <h2>Technologis</h2>

            <ul className="list list_ways">
                {/* тернарний оператор з методом (.map()) завдяки якому 
                    масив перебразовуємо в компонент <WayToTech { ...way} /> */}
                {ways.map((way) => (
                    <WayToTech key={way.title} {...way} />
                ))}

                {/* <WayToTech 
            title={ways[0].title} 
            description={ways[0].description} 
            />
            <WayToTech { ...ways[1]} />
            <WayToTech { ...ways[2]} />
            <WayToTech { ...ways[3]} /> */}
            </ul>
        </section>
    );
}
