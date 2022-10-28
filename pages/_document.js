import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-[url('/images/light-bg.jpg')] bg-cover dark:bg-[url('/images/dark-bg.png')]">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}