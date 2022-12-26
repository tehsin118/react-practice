import React, { useRef } from "react";

const UseRef = () => {
  const myName = useRef(null);
  const yName = null;

  const onButtonClick = (e) => {
    e.preventDefault();
    yName = myName.current.value;
    myName = null;
    alert(myName.current.value);
  };

  return (
    <div>
      <h1>Use Ref</h1>

      <input ref={myName} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
};

export default UseRef;
