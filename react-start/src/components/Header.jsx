import { useState } from 'react';
import '../App.css'  
import Logo from '../assets/logo.svg'
import React from 'react';
// import TabsSection from './TabsSection';

function Greetings() {
        return React.createElement('section', null, (
            React.createElement('div', { className: 'items' }, [
                React.createElement('h1', { className: 'title_item', key: 1 },  'Hello Vitala'),
                React.createElement('p', { className: 'text_item', key: 2 },  'Вітаю з першим проєктом на React')
            ]))    
        );
    }

function Header() {
    const [now, setNow] = useState(new Date());
    setInterval(() => setNow(new Date()), 1000)

    // const [tab, setTab ] = useState('ourTeam');

    
    
    return (
    <header className='header_react'>
        <div className='header_box'>
            <div className='flex_box_header'>
                <div className='box_log'>
                <img src={Logo} alt={'Логотип'} className='img_log' />
                <a href="#" className='title_logo'>
                    WEB
                    <span className='title_studio'>STUDIO</span>
                </a>
            </div>

            <p className='clock '>час: {now.toLocaleTimeString()}</p>
            </div>
            <div>
                <Greetings />
            </div>
        </div>
    </header>
    );
}

export default Header;