import { RecoilRoot } from "recoil";

import "@/lang/i18n";
import Layout from "./Layout";

import "@/styles/globals.css";
import "@/styles/_index.scss";

import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default appWithTranslation(App);