// import { useState } from "react";
import './App.css'
import Header from './components/Header';
import WayToTech from './components/WayToTech.jsx';
import Button from './components/Button/Button.jsx';
import { useState } from 'react';
import { ways, listNext } from './components/data.js';

function App() {
  const [contentType, setContentType] = useState(null);
  
  function handOnClick(type) {
    setContentType(type);
  }

  return (
    <div>
      <Header />
      <main>
        <h1>Hello Vitala</h1>

        <p>Вітаю з першим проєктом на React </p>
        <section>
          <h2>Technologis</h2>

          <ul className='list list_ways'>
            <WayToTech 
            title={ways[0].title} 
            description={ways[0].description} 
            />
            <WayToTech { ...ways[1]} />
            <WayToTech { ...ways[2]} />
            <WayToTech { ...ways[3]} />
            
          </ul>
        </section>

        <section>
          <h2>About us</h2>
          <div className='btn_section'>
            <Button onClick={() => handOnClick('next')}>Next</Button> 
            <Button onClick={() => handOnClick('priveus')}>Priveus</Button> 
          </div>

          {/* тернарний оператор */}
          {!contentType && <p className='text_content'>НАТИСНИ КНОПКУ</p>}
          {contentType && <p className='text_content'>{listNext[contentType]}</p>}
        </section>
      </main>
    </div>
  );
}

export default App;

