import './App.css'
import AboutTech from './components/AboutTecnh.jsx';
import Header from './components/Header';
import Technologis from './components/Technologis.jsx';
import Footer from './components/Footer.jsx'
import Greetings from './components/Greetings.jsx';
import TabsSection from './components/TabsSection.jsx';
import OurTeam from './components/Customers.jsx';
import { useState } from 'react';

function App() {
  const [tab, setTab ] = useState('ourTeam');


  return (
    <>
      <Header />
      <main>
        <Greetings />
        <TabsSection />
        
        {tab === 'main' && (<>
        <Technologis />
        <AboutTech />
        </>)}

        {tab === 'ourTeam' && <OurTeam />}
      </main>
      <Footer />
    </>
  );
}

export default App;

