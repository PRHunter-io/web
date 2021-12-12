import { createContext, useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, getAuth, onIdTokenChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import nookies from 'nookies';
import app from "@/lib/firebase"

export const AuthContext = createContext({
  user: null,
  signIn: async () => { },
  signUp: async () => { },
  signOut: async () => { }
});

const auth = getAuth(app);

export function AuthUserProvider({ children }) {

  const [user, setUser] = useState(null)

  useEffect(() => {
    return onIdTokenChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setUser(user)
        nookies.set(undefined, 'token', token, { path: '/' });
      } else {
        setUser(null)
        nookies.set(undefined, 'token', '', { path: '/' });
      }
    })
  }, [])

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  }

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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

  

  return <AuthContext.Provider value={{user, signUp, signIn, logout}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext)
