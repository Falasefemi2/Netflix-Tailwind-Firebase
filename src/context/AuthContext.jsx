import { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "../firebase";
import {auth, db} from "../firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {setDoc,doc} from "firebase/firestore"

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setDoc(doc(db, "users", email.toString()), {
          savedShows: [],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);




