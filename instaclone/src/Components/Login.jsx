import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const trackEmail = (e) => {
    setEmail(e.target.value);
  };

  const trackPassword = (e) => {
    setPassword(e.target.value);
  };

  const printDetails = () => {
    alert(email + " " + password);
  };

  return (
    <>
      <input
        type="email"
        onChange={trackEmail}
        value={email}
        placeholder="Email"
      ></input>

      <input
        type="password"
        onChange={trackPassword}
        value={password}
        placeholder="Password"
      ></input>

      <button type="click" onClick={printDetails}>
        Login
      </button>
    </>
  );
}

export default Login;
