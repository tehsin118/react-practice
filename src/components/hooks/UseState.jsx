import React, { useState } from "react";
import "../../App.scss";
const initialData = {
  username: "",
  email: "",
  password: "",
};
function UseState() {
  const [formData, getFormData] = useState(initialData);
  const [callData, setCallData] = useState(formData);
  const { username, email, password } = formData;

  const inputEvent = (e) => {
    // console.log(e.target.value);
    getFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getData = (e) => {
    setCallData(formData);
  };

  return (
    <div className="useState">
      <h1>Use State Hook Learning</h1>
      <br />

      <input
        type="text"
        placeholder="name"
        onChange={inputEvent}
        // value={username}
        name="username"
      />
      <br />
      <input
        type="text"
        placeholder="email"
        onChange={inputEvent}
        name="email"
      />
      <br />
      <input
        type="text"
        placeholder="password"
        onChange={inputEvent}
        name="password"
      />
      <br />
      <button className="btn" onClick={getData}>
        Get Value
      </button>

      <div>
        <h2>Name: {callData.username}</h2>
        <h2>Email: {callData.email}</h2>
        <h2>Pass: {callData.password}</h2>
      </div>
    </div>
  );
}

export default UseState;
