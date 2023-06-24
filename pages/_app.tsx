import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Simrs Loofytech</title>
    </Head>
    <Component {...pageProps} />
    <Script src="/js/jquery.js"></Script>
    <Script src="/js/popper.js"></Script>
    <Script src="/js/bootstrap.js"></Script>
    <Script src="/js/perfect-scrollbar.js" type="module"></Script>
    <Script src="/js/helpers.js" type="module"></Script>
    <Script src="/js/menu.js" type="module"></Script>
    <Script src="/js/main.js" type="module"></Script>
  </>);
}
