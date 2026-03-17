import './App.css'
import Header from './components/Header.jsx';
import Greetings from './components/Greetings.jsx';
import Technologis from './components/Technologis.jsx';
import AboutTech from './components/AboutTecnh.jsx';
import OurTeam from './components/OurTeam.jsx';
import Feedback from './components/Feedback.jsx';
import Footer from './components/Footer/Footer.jsx'
import TabsSection from './components/TabsSection.jsx'
import { useState } from 'react';

function App() {
  const [tab, setTab ] = useState('ourTeam');

  return (
    <>
      <Header />
      <TabsSection active={tab} onChacge={(current) => setTab(current)}/>

      <main>
        {/* <TabsSection active={tab} onChacge={(current) => setTab(current)}/> */}
        
        {tab === 'main' && <OurTeam />}
        <Feedback />

        <Technologis />
        <AboutTech />
      </main>
      <Footer />
    </>
  );
}

export default App;

// прочитати та ознаюмитися із житевим циклом компонентов в React (звернути увагу useEffact)
// прочитати про оновлення DOM по приченні оновлення State та зніни props

//useEffect - це хук який React, який дозволяє виконувати код після рендера компонента:
//State змінився -> рендер -> DOM оновлюється -> викон. useEffect.
//useEffect для побічних дій side effects - це будь-яка дія яка виходить за межі React UI 