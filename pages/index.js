import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>cssFX - Beautifully simple click-to-copy CSS effects</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="cssFX" />
        <meta name="application-name" content="cssFX" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </>
  );
}
