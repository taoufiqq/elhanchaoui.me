import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <title> Elhanchaoui.me Portfolio</title>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="MERN stack developer" />
          <meta name="keywords" content="Full stack web developer" />
        </Head>
        <body className="bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
