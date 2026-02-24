
import Button from "./Button/Button";

export default function TabsSection({ active, onChacge }) {
    return (
        <section className="tabs">
            <Button isActive={active === 'main'} onClick={() => onChacge('main')}>Our Team</Button>
            <Button isActive={active === 'ourTeam'} onClick={() => onChacge('ourTeam')}>Customers</Button>
        </section>
    );

}