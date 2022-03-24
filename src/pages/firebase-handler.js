import { useAuth } from '@/context/AuthUserContext';
import { useRouter } from 'next/router';

const FirebaseHandler = () => {
  const router = useRouter();
  const { mode, oobCode, continueUrl } = router.query;
  const { verifyEmailAddress } = useAuth();

  if (mode !== undefined && oobCode !== undefined) {
    switch (mode) {
      case 'resetPassword':
        // Display reset password handler and UI.
        // handleResetPassword(auth, actionCode, continueUrl, lang);
        break;
      case 'recoverEmail':
        // Display email recovery handler and UI.
        // handleRecoverEmail(auth, actionCode, lang);
        break;
      case 'verifyEmail':
        // Display email verification handler and UI.
        verifyEmailAddress(oobCode, continueUrl);
        break;
      default:
      // Error: invalid mode.
    }
  }

  return null;
};
export default FirebaseHandler;
