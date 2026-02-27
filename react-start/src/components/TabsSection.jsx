// import './App.css'
import Button from "./Button/Button";

export default function TabsSection({ active, onChacge }) {
    return (
        <section className="tabs">
            <Button className='tabs_btn' isActive={active === 'main'} onClick={() => onChacge('main')}>Our Team</Button>
            <Button className='tabs_btn' isActive={active === 'ourTeam'} onClick={() => onChacge('ourTeam')}>Feedback</Button>
        </section>
    );

}