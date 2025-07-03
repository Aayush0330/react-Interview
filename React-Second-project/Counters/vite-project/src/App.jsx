import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  const addValue = () => {
    if (count < 20) {
      setcount(count + 1);
    }
  };
  const removeValue = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };

  return (
    <>
      <h1>Counters : {count}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
