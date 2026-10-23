import classes from '../Button/Button.module.css'

export default function Button({ children, className = '', type = 'button', isActive = false, ...props }) {

    return (
        <button {...props} type={type} className={[classes.button, isActive && classes.active, className].filter(Boolean).join(' ')}>
            {children}
        </button>
    );
}
