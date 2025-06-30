import './App.css'

function App() {

  const counter = 15
  

  return (
    <>
      <h1>Counters</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={(addValue)}>Add Value</button> 
      <button onClick={(removeValue)}>Remove Value</button>
    </>
  )
}

export default App
