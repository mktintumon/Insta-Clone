import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [mainLoader, setMainLoader] = useState(true);

  const trackEmail = (e) => {
    setEmail(e.target.value);
  };

  const trackPassword = (e) => {
    setPassword(e.target.value);
  };

  const printDetails = async () => {
    //alert(email + " " + password);

    try {
      setLoader(true);
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      //console.log(userCredential.user);
      setUser(userCredential.user);
    } catch (error) {
      setError(error.message);

      //after some time -> remove error meaasge
      setTimeout(() => {
        setError("");
      }, 2000);
    }

    setLoader(false);
  };

  const signout = async () => {
    await signOut(auth);
    setUser(null);
  };

  // This will always call and check for user existence
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
      setMainLoader(false)
    });
  }, []);

  return (
    <>
      {mainLoader == true ? (
        <h1>Page loading....</h1>
      ) : error != "" ? (
        <h1>{error}</h1>
      ) : loader == true ? (
        <h1>Loading....</h1>
      ) : user != null ? (
        <>
          <h1>user is {user.uid}</h1>
          <button onClick={signout}>signout</button>
        </>
      ) : (
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
      )}
    </>
  );
}

export default Login;
