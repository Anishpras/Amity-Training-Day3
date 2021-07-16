import React, { useState } from "react";
import CounterJSX from "./CounterJSX";

const Counter = () => {
  const initialState = 0;
  const [count, setCount] = useState({ name: "Anish", age: 21 });
  //   console.log(setCount);
  //   const incrementValueByEleven = () => {
  //     for (let i = 0; i < 11; i++) {
  //       setCount((prevCount) => prevCount + 1);
  //   console.log(count);
  //     }
  //   };

  return (
    <div>
      <CounterJSX nameAndAgeObject={count} setCount={setCount} />
      {/* <button onClick={incrementValueByEleven}>Increment By 11</button> */}
    </div>
  );
};

export default Counter;
