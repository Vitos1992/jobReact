import { useState } from 'react';
import '../App.css'
import Logo from '../assets/logo.svg'


function Header() {
    const [now, setNow] = useState(new Date());
    setInterval(() => setNow(new Date()), 1000)
    
    return (
    <header>
        <div className='header_box'>
            <div className='box_log'>
                <img src={Logo} alt={'Логотип'} className='img_log' />
                <a href="#" className='title_logo'>
                    WEB
                    <span className='title_studio'>STUDIO</span>
                </a>
            </div>

            <p className='clock '>час: {now.toLocaleTimeString()}</p>
        </div>
    </header>
    );
}

export default Header;