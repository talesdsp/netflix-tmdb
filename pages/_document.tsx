import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

          <meta name="theme-color" content="#000" />

          {/* <!--  SEO   --> */}
          <meta property="og:title" content="Netflix" />
          <meta name="description" content="" />
          <meta property="og:description" content="" />
          <meta property=" og:url" content="" />

          <link rel="canonical" href="/" />

          <meta name="robots" content="nofollow" />

          {/* <!--  FAVICON --> */}

          {/* <!--  PWA   --> */}

          <meta name="apple-mobile-web-app-capable" content="yes" />

          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#000000"
          />

          <meta name="apple-mobile-web-app-title" content="Netflix" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
