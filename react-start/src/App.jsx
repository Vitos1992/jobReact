// import { useState } from "react";
import './App.css'

function Header() {
  return (
    <header>
        <h2>логотип</h2>

        <p>опис</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Hello Vitala</h1>

        <p>Вітаю з першим проєктом на React </p>
      </main>
    </div>
  );
}

export default App

