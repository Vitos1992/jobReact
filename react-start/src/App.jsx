import './App.css'
import AboutTech from './components/AboutTecnh.jsx';
import Header from './components/Header';
import Technologis from './components/Technologis.jsx';
import Footer from './components/Footer.jsx'
import Greetings from './components/Greetings.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Greetings />
        <Technologis />
        <AboutTech />
      </main>
      <Footer />
    </>
  );
}

export default App;

