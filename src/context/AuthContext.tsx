import React from "react";
import firebase from "firebase/auth";

export const AuthContext = React.createContext<firebase.User | null>(null);
