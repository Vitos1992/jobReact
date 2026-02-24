import './App.css'
import Header from './components/Header';
import Greetings from './components/Greetings.jsx';
import Technologis from './components/Technologis.jsx';
import AboutTech from './components/AboutTecnh.jsx';
import OurTeam from './components/Customers.jsx';
import TabsSection from './components/TabsSection.jsx';
import Footer from './components/Footer.jsx'
import { useState } from 'react';

function App() {
  const [tab, setTab ] = useState('ourTeam');

  return (
    <>
      <Header />
      <main>
        <Greetings />
        
        <Technologis />
        <AboutTech />
        
        <TabsSection active={tab} onChacge={(current) => setTab(current)}/>
        
        {tab === 'main' && <OurTeam />}

      </main>
      <Footer />
    </>
  );
}

export default App;

