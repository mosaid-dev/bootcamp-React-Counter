import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement =() => {
    setCount(count + 1);
  };

  const handleDecrement =() => {
    setCount(count -1);
  };

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>React Counter</h1>
      <p style={{fontsize: '48px'}}>{count}</p>
      <div>
      <button onclick={handleDecrement} style={{marginRight: '10px'}}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      </div>
      </div>
  


  );
}

export default App;
