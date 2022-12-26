import React from "react";

function Time() {
  const name = "Tehsin";
  let greeting = "";
  const date = new Date().toLocaleDateString();
  const Time = new Date().getHours();
  const cssStyle = {};

  if (Time >= 5 && Time < 12) {
    greeting = "Morning";
    cssStyle.color = "Red";
  } else if (Time >= 12 && Time < 19) {
    greeting = "Afternoon";
    cssStyle.color = "Red";
  } else {
    greeting = "Night";
  }

  return (
    <div>
      <h1>my Name is : {name}</h1>
      <h1>Current Date: {date}</h1>
      <h1>
        Hello Sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  );
}

export default Time;
