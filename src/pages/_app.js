import Layout from '../components/Layout';
import { GlobalProvider } from '../context/GlobalContext';

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../node_modules/aos/dist/aos.css';

import '../scss/bootstrap.scss';
import '../scss/main.scss';
import { useEffect } from 'react';
import * as ga from '../lib/ga';
import { AuthUserProvider } from 'src/context/AuthUserContext';
import { ApiServiceProvider } from 'src/context/ApiServiceContext';
import { DAppProvider } from '@usedapp/core';

const MyApp = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const pageContext = () => {
    if (router.pathname.match(/404/)) {
      return { layout: 'bare' };
    } else if (router.pathname.match(/dashboard/)) {
      return { layout: 'dashboard' };
    } else {
      return {};
    }
  };

  return (
    <GlobalProvider>
      <AuthUserProvider>
        <ApiServiceProvider>
          <DAppProvider config={{}}>
            <Layout pageContext={pageContext()}>
              <Component {...pageProps} />
            </Layout>
          </DAppProvider>
        </ApiServiceProvider>
      </AuthUserProvider>
    </GlobalProvider>
  );
};

export default MyApp;
