import "./App.css";
import { useState } from "react";
import Counter from "./Counter";
function App() {
  const [count, setCount] = useState(0);

  // const handleChange = () => {
  //   setCount();
  // };
  // console.log(handleChange);
  return (
    <div className="App">
      {/* <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click to increment</button>
     */}
      <Counter />
    </div>
  );
}

export default App;
