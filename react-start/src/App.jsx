import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const step = 5;

  function increment() {
    setCount(prev => prev + step);
  }

  function decrement() {
    setCount(prev => Math.max(prev - step, 0));
  }

  function double() {
    setCount(prev => prev * 2);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Мій перший проєки на React</h1>
      <h2>Лічильник: {count}</h2>

      <button onClick={increment}>+{step}</button>
      <button onClick={double}>*2</button>
      <button onClick={decrement}>-{step}</button>
      <button onClick={reset}>Reset</button>
    </div>  
  );
}


export default App

