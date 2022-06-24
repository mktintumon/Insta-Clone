import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();

export function AuthContextProvider({children}){
    const [mainLoader , setMainLoader] = useState(true)
    const [currUser , setUser] = useState(null)


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

    let value = {currUser}

    return(
       <AuthContext.Provider value={value}>
           {mainLoader == false && children}
       </AuthContext.Provider>
    )
}
