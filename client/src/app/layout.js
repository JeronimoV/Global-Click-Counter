import "./global.css";
import Head from "next/head";

export const metadata = {
  title: "Global Click Counter",
  description: "Just a global click counter, what i need to explain?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Noto+Sans&family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
