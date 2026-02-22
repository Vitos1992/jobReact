import { useState } from 'react';
import '../App.css'
import Logo from '../assets/logo.svg'


function Header() {
    const [now, setNow] = useState(new Date());
    //const now = new Date();
    setInterval(() => setNow(new Date()), 1000)
    
    return (
    <header>
        <div className='header_box'>
            <img src={Logo} alt={'Логотип'} />

            <p className='clock '>час: {now.toLocaleTimeString()}</p>
        </div>
    </header>
    );
}

export default Header;