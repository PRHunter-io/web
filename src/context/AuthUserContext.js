import { createContext, useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, getAuth, onIdTokenChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GithubAuthProvider, linkWithPopup } from "firebase/auth"
import nookies from 'nookies';
import { parseCookies } from 'nookies'
import app from "@/lib/firebase"
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';

const notificationsText = {
  signIn: 'You have been logged in',
  signUp: 'Your account has been created',
  signOut: 'You have been logged out',
}

export const AuthContext = createContext({
  user: null,
  signIn: async () => { },
  signUp: async () => { },
  signOut: async () => { }
});

const auth = getAuth(app);
const provider = new GithubAuthProvider();

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

  const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
  })

  const uploadGithubAccessToken = async (signInResult) => {
    const credential = GithubAuthProvider.credentialFromResult(signInResult);
    let githubUserDto = {
        firebase_user_id: signInResult.user.uid,
        access_token: credential.accessToken
    }
    const token = await signInResult.user.getIdToken();
    const headers = {
        'Authorization': 'Bearer ' + token
    }
    await apiClient.post('github/token', githubUserDto, {
      headers: headers
    })
}

  const githubSignIn = async () => {
    const result = await signInWithPopup(auth, provider)
    uploadGithubAccessToken(result)
    await router.push("/dashboard")
    toast.success(notificationsText.signIn);
  }

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await router.push("/dashboard");
      toast.success(notificationsText.signIn);
      return true;
    } catch (error) {
      console.error(error);
    }
  }

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await router.push("/dashboard");
      toast.success(notificationsText.signUp);
      return true;
    } catch (error) {
      console.error(error);
    }
  }

  const logout = async () => {
    try{
      await signOut(auth)
      await router.push("/")
      toast.success(notificationsText.signOut);
    } catch (error){
      console.error(error)
    }
  }

  const isUserSignedIn = () => {
    return parseCookies().token !== "";
  }

  const linkGithubAccount = async () => {
    return await linkWithPopup(auth.currentUser, provider)
  }

  return <AuthContext.Provider value={{user, signUp, signIn, githubSignIn, linkGithubAccount, logout, isUserSignedIn}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext)
