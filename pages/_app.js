import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../i18n";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp, nextI18NextConfig);

