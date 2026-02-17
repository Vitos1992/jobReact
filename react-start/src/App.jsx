// import { useState } from "react";
import './App.css'
import Header from './components/Header';
import { ways } from './components/data.js';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Hello Vitala</h1>

        <p>Вітаю з першим проєктом на React </p>
        <section>
          <h3>Technologis</h3>
          <ul>
            <li>
              <h4>Strategy</h4>
              <p>
                Our goal is to identify the business problem to walk away with the perfect and creative solution.
              </p>
            </li>
            <li>
              <h4>Punctuality</h4>
              <p>
                Bring the key message to the brand's audience for the best price within the shortest possible time.
              </p>
            </li>
            <li>
              <h4>Diligence</h4>
              <p>
                Research and confirm brands that present the strongest digital growth opportunities and minimize risk.
              </p>
            </li>
            <li>
              <h4>Technologies</h4>
              <p>
                Design practice focused on digital experiences. We bring forth a deep passion for problem-solving.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

