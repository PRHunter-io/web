import { useAuth } from '@/context/AuthUserContext';
import { useState } from 'react';

export const GithubData = () => {
  const { user, linkGithubAccount } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  const tryToLinkUserAccount = async () => {
    try {
      setErrorMessage('');
      await linkGithubAccount();
      setErrorMessage('Account linked successfully');
    } catch (ex) {
      if (ex.code === 'auth/credential-already-in-use') {
        setErrorMessage('This account is already linked to another user');
      } else {
        setErrorMessage(ex.message);
      }
      console.error(ex);
    }
  };

  if (user === null) {
    return <span>Loading...</span>;
  }

  const githubProvider =
    user.proactiveRefresh.user.reloadUserInfo.providerUserInfo.filter(
      (provider) => {
        return provider.providerId === 'github.com';
      }
    );
  if (githubProvider.length !== 0) {
    return (
      <h6 className="font-weight-semibold">
        Linked Github account: {githubProvider[0].screenName}
      </h6>
    );
  } else {
    return (
      <>
        <a
          href="#"
          onClick={tryToLinkUserAccount}
          className="font-size-4 font-weight-semibold position-relative text-white bg-black h-px-48 flex-all-center px-6 rounded-5 mb-4"
        >
          <i className="fab fa-github pos-xs-abs-cl font-size-7 ml-xs-4"></i>{' '}
          <span className="d-none d-xs-block">Link Github Account</span>
        </a>
        {errorMessage ? (
          <span className="text-danger">{errorMessage}</span>
        ) : (
          ''
        )}
      </>
    );
  }
};
