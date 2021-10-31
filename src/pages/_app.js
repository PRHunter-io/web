// import App from 'next/app'
import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/aos/dist/aos.css";

import "../scss/bootstrap.scss";
import "../scss/main.scss";

const MyApp = ({ Component, pageProps, router }) => {
  if (router.pathname.match(/404/)) {
    return (
      <GlobalProvider>
        <Layout pageContext={{ layout: "bare" }}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    );
  }
  if (router.pathname.match(/dashboard/)) {
    return (
      <GlobalProvider>
        <Layout pageContext={{ layout: "dashboard" }}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    );
  }

  return (
    <GlobalProvider>
      <Layout pageContext={{}}>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
};

export default MyApp;
