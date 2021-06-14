import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {setCount(count+1)}}>+</button>
        <h1>Counter for Life: {count}</h1>
        <button onClick={() => {setCount(count-1)}}>-</button>
      </header>
    </div>
  );
}

export default App;
