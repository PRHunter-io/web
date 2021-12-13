import { createContext, useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, getAuth, onIdTokenChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GithubAuthProvider } from "firebase/auth"
import nookies from 'nookies';
import app from "@/lib/firebase"
import { useRouter } from 'next/router';
import { GithubService } from '@/lib/github';
import axios from 'axios';

export const AuthContext = createContext({
  user: null,
  signIn: async () => { },
  signUp: async () => { },
  signOut: async () => { }
});

const auth = getAuth(app);
const provider = new GithubAuthProvider();

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export function AuthUserProvider({ children }) {

  const [user, setUser] = useState(null)
  const router = useRouter()

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

  const githubSignIn = async () => {
    const result = await signInWithPopup(auth, provider)
    await GithubService.uploadGithubAccessToken(result)
    router.push("/dashboard")
  }

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard")
    } catch (error) {
      console.error(error);
    }
  }

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard")
    } catch (error) {
      console.error(error);
    }
  }

  const logout = async () => {
    try{
      await signOut(auth)
      router.push("/")
    } catch (error){
      console.error(error)
    }
  }

  

  return <AuthContext.Provider value={{user, signUp, signIn, githubSignIn, logout}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext)
