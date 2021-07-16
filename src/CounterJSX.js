import React from "react";

const CounterJSX = ({ nameAndAgeObject, setCount }) => {
  console.log({ ...nameAndAgeObject });
  return (
    <div>
      <h1>Name and Age</h1>
      <h2>{nameAndAgeObject.name}</h2>
      <h2>{nameAndAgeObject.age}</h2>
      <button
        onClick={() => setCount({ ...nameAndAgeObject, name: "Prakhar" })}>
        Change Name
      </button>
      {/* <button onClick={() => setCount(0)}>Reset</button> */}
      <button onClick={() => setCount({ ...nameAndAgeObject, age: 20 })}>
        Change age
      </button>
    </div>
  );
};

export default CounterJSX;
