// npm i firebase
// src -> create file.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import secret from './firesecrets'
let app = initializeApp(secret)

export let auth = getAuth(app)