import Head from 'next/head';
import '../style.css';
import Nav from '../components/nav';
import Header from '../components/header';

export default function Index() {
  return (
    <>
      <Head>
        <title>cssFX - Beautifully simple click-to-copy CSS effects</title>
        <meta
          name="description"
          content="Browse a carefully crafted collection of loaders, hover effects, transitions, and other CSS effects to use in your next project. Effects are designed with an emphasis on fluidity, simplicity, and ease of use."
        />
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Montserrat:300,400" rel="stylesheet" />
        {/* Favicon */}
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
        {/* Social meta */}
        <meta property="og:title" content="cssFX - Beautifully simple click-to-copy CSS effects" />
        <meta
          property="og:description"
          content="Browse a carefully crafted collection of loaders, hover effects, transitions, and other CSS effects to use in your next project. Effects are designed with an emphasis on fluidity, simplicity, and ease of use."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cssfx.dev/" />
        <meta property="og:image" content="http://cssfx.dev/static/logo.png" />
        <meta property="og:image:secure_url" content="https://cssfx.dev/static/logo.png" />
        <meta property="og:image:alt" content="cssFX logo" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="800" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Nav />
      <Header />
    </>
  );
}
