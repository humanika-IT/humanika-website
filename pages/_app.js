import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  // const router = useRouter();

  // useEffect(() => {
  //   const handleStart = (url) => {
  //     console.log(`Loading: ${url}`);
  //     // NProgress.start();
  //   };

  //   const handleStop = () => {
  //     console.log(`Finish`);
  //     // NProgress.done();
  //   };

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleStop);
  //   router.events.on("routeChangeError", handleStop);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleStop);
  //     router.events.off("routeChangeError", handleStop);
  //   };
  // }, [router]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
