import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewPort" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        />
        {/* nprogress cdn */}
        <link
          rel="stylesheet"
          href="https://cdnout.com/nprogress/nprogress.min.css"
        />
        <link rel="stylesheet" href="/static/css/styles.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
