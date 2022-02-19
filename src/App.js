import Counter from "./components/Counter";
import React from "react";
function App() {
  const [show, setShow] = React.useState(true)

  const [count, setCount] = React.useState(0)
  const [taps, setTaps] = React.useState(0)
  
  function handleIncrement() {
    setCount(prevCount => prevCount + 1)
    setTaps(prevTaps => prevTaps + 1)
  }

  function handleDecrement() {
    setTaps(prevTaps => prevTaps + 1)
    if (count !== 0) {
      setCount(prevCount => prevCount - 1)
    }
  }

  function handleReset() {
    setCount(0)
  }

  function handleResetAll() {
      setCount(0) 
      setTaps(0)

  }
  return (
    <div className="d-flex p-5 flex-column justify-content-start align-items-center text-center min-vh-100" id="img">
      <h1 className="text-light mt-3">Counter</h1>
      <button className="btn rounded-pill my-4 text-light" onClick={() => setShow(prevShow => !prevShow)} > {show ? "Hide Counter" : "Show Counter"} </button>
      {
        show && (
          <Counter 
            countProp={count} 
            tapsProp={taps} 
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onReset={handleReset}
            onResetAll={handleResetAll}
          />
        )}
      </div>  
  );
}

export default App;
