import React from "react"
import Document, { Head, Html, Main, NextScript } from "next/document"
import { ServerStyleSheets } from "@material-ui/core/styles"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja-JP">
        <Head>
          {/* PWA primary color */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
