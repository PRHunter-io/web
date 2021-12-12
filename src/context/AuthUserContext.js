import { createContext, useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from "@/lib/firebase"

export const AuthContext = createContext({
  user: null,
  loading: true,
  signIn: async () => { },
  signUp: async () => { },
  signOut: async () => { }
});

const auth = getAuth(app);

export function AuthUserProvider({ children }) {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return unsubscribe;
  })

  const signIn = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  }

  const signUp = async (email, password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  }

  const logout = async () => {
    try{
      await signOut(auth)
    } catch (error){
      console.error(error)
    }
  }

  

  return <AuthContext.Provider value={{signUp, signIn, logout}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext)
