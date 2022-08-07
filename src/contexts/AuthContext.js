import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";
import { auth } from "../Firebase";
import { db } from "../Firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  let usersCollection;
  const createUser = (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password).then((response) => {
      usersCollection = doc(db, "users", response.user.uid);
      setDoc(usersCollection, { username: username })
        .then(() => {
          console.log("Document added");
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
