import React from "react";
import { useState } from "react";
import "../../App.scss";
const Login = () => {
  const [name, setName] = useState("");

  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    if (name == null) {
      alert(name);
    }
  };

  return (
    <div>
      <div className="useState">
        <h1>Login Form</h1>
        <br />

        <input type="text" placeholder="name" onChange={handleInput} />
        <br />
        <input type="text" placeholder="email" />
        <br />
        <input type="text" placeholder="password" />
        <br />
        <button className="btn" onClick={handleSubmit}>
          Get Value
        </button>

        <div>
          <h2>Name: </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
