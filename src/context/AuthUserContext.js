import { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onIdTokenChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GithubAuthProvider,
  linkWithPopup,
  applyActionCode,
  sendEmailVerification,
} from 'firebase/auth';
import nookies from 'nookies';
import { parseCookies } from 'nookies';
import app from '@/lib/firebase';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';
import GlobalContext from './GlobalContext';

const notificationsText = {
  signIn: 'You have been logged in',
  signUp: 'Your account has been created',
  signOut: 'You have been logged out',
};

export const AuthContext = createContext({
  user: null,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

const auth = getAuth(app);
const provider = new GithubAuthProvider();

export function AuthUserProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const gContext = useContext(GlobalContext);

  const checkEmailData = async () => {
    const token = parseCookies().token;
    const userData = await apiClient.get('user', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    const emailData = {
      email: userData.data.email,
      isEmailVerified: userData.data.is_email_verified,
    };

    localStorage.setItem('emailData', JSON.stringify(emailData));
    gContext.setEmailData(emailData);
  };

  const completeAuthProcess = async (toastText) => {
    gContext.closeAllModals();
    router.push('/dashboard');
    toast.success(toastText);
    await checkEmailData();
  };

  useEffect(() => {
    return onIdTokenChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, 'token', token, { path: '/' });
      } else {
        setUser(null);
        nookies.set(undefined, 'token', '', { path: '/' });
      }
    });
  }, []);

  const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const uploadGithubAccessToken = async (signInResult) => {
    const credential = GithubAuthProvider.credentialFromResult(signInResult);
    let githubUserDto = {
      firebase_user_id: signInResult.user.uid,
      access_token: credential.accessToken,
    };
    const token = await signInResult.user.getIdToken();
    const headers = {
      Authorization: 'Bearer ' + token,
    };
    await apiClient.post('github/token', githubUserDto, {
      headers: headers,
    });
  };

  const sendRegistrationEmail = async (signUpResult, email) => {
    const token = await signUpResult.user.getIdToken();
    const headers = {
      Authorization: 'Bearer ' + token,
    };
    let dto = {
      email: email,
    };
    await apiClient.post('email/signup', dto, {
      headers: headers,
    });
  };

  const verifyEmailAddress = async (actionCode) => {
    try {
      await applyActionCode(auth, actionCode);
      router.push('/email-verify-success');
    } catch (error) {
      console.log(error);
    }
  };

  const githubSignIn = async () => {
    const result = await signInWithPopup(auth, provider);
    uploadGithubAccessToken(result);
    completeAuthProcess(notificationsText.signIn);
  };

  const signIn = async (email, password, setLoginError) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      completeAuthProcess(notificationsText.signIn);
    } catch (error) {
      setLoginError('Invalid email or password.');
    }
  };

  const signUp = async (email, password, setSignupError) => {
    try {
      const signUpResult = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendRegistrationEmail(signUpResult, email);
      completeAuthProcess(notificationsText.signUp);
    } catch (error) {
      setSignupError('This email is already in use.');
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      await router.push('/');
      toast.success(notificationsText.signOut);
    } catch (error) {
      console.error(error);
    }
  };

  const isUserSignedIn = () => {
    return parseCookies().token !== '';
  };

  const linkGithubAccount = async () => {
    return await linkWithPopup(auth.currentUser, provider);
  };

  const resendVerificationEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      toast.success('Thanks! Please check your mailbox for verification link.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signIn,
        githubSignIn,
        linkGithubAccount,
        logout,
        isUserSignedIn,
        verifyEmailAddress,
        checkEmailData,
        resendVerificationEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
