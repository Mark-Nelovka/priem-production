/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <link
          rel="alternate"
          href="https://vimeo.com/api/oembed.json?url=https%3A%2F%2Fvimeo.com%2F{video_id}"
          type="application/json+oembed"
          title="{video_title}"
        />
        <link
          rel="alternate"
          href="https://vimeo.com/api/oembed.xml?url=https%3A%2F%2Fvimeo.com%2F{video_id}"
          type="text/xml+oembed"
          title="{video_title}"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
