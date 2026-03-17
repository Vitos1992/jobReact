import classes from '../Button/Button.module.css'

export default function Button({ children, onClick, isActive }) {

    console.log(classes);

    return (
        <button className={isActive ? 'active' : 'button'} onClick={onClick}>
            {children}
        </button>
    );
}