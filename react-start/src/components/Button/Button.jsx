import '../Button/Button.css'

export default function Button({ children, onClick, isActive }) {


    return <button className={isActive ? 'active' : 'button'} onClick={onClick}>
        {children}
    </button>;
}