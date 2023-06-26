import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (<Provider store={store}>
    <Head>
      <title>Simrs Loofytech</title>
    </Head>
    <Component {...pageProps} />
  </Provider>);
}
