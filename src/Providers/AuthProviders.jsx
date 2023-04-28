import React, { createContext, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  useEffect(() => {}, []);
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
