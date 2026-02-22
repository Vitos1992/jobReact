import './App.css'
import AboutTech from './components/AboutTecnh.jsx';
import Header from './components/Header';
import Technologis from './components/Technologis.jsx';

function App() {
  return (
    <>
      <Header />
      <main> 
        <Technologis />
        <AboutTech />
      </main>
    </>
  );
}

export default App;

