import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  async function processSignUp() {
    try {
      setLoader(true);
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // we are using set method here because we want our own key
      // add method dont allow user built key 
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email,
        name,
        reelsIds: [],
        profileImgUrl: "",
        userId: userCredential.user.uid,
      });

      setUser(userCredential.user);
    } catch (error) {
      setError(error.message);

      //after some time -> remove error meaasge
      setTimeout(() => {
        setError("");
      }, 2000);
    }

    setLoader(false);
  }

  return (
    <>
      {error != "" ? (
        <h1>{error}</h1>
      ) : loader == true ? (
        <h1>Loading....</h1>
      ) : user != null ? (
        <h1>Signed up user is {user.uid}</h1>
      ) : (
        <>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Email"
          ></input>
          <br />
          <br />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          ></input>
          <br />
          <br />

          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Full name"
          ></input>
          <br />
          <br />

          <button type="click" onClick={processSignUp}>
            Sign up
          </button>
        </>
      )}
    </>
  );
}

export default Signup;
