import "@/styles/globals.css";
import "@/styles/_index.scss";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
