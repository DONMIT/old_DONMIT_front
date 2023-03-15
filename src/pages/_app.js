import { RecoilRoot } from "recoil";

import "@/lang/i18n";
import Layout from "./Layout";

import "@/styles/globals.css";
import "@/styles/_index.scss";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
