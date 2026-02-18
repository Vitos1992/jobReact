import '../App.css'
import Logo from '../assets/logo.svg'


function Header() {
    const now = new Date();
    
    return (
    <header className='header_box'>
        <img src={Logo} alt={'Логотип'} />

        <p>час: {now.toLocaleTimeString()}</p>
    </header>
    );
}

export default Header;