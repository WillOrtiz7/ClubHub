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
  // Add a new user
  const createUser = (email, password, username) => {
    // Add new user to authentication
    createUserWithEmailAndPassword(auth, email, password).then((response) => {
      usersCollection = doc(db, "users", response.user.uid);
      // Add new user to database collection
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

  // Set the user when a new user logs in
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

// Export all of the functions created in this file
export const UserAuth = () => {
  return useContext(UserContext);
};
