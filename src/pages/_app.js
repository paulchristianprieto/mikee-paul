import Head from "next/head";
import "normalize.css"
import Navigation from "../components/Navigation"
import "../styles/globals.css"

const pages = [
  { href: "/", name: "Our Story" },
  { href: "/rsvp", name: "RSVP" },
  { href: "/travel-stay", name: "Travel & Stay" },
  { href: "/tables", name: "Tables" },
  { href: "/mikee", name: "Mikee" },
  { href: "/paul", name: "Paul" },
  { href: "/suppliers", name: "Suppliers" },
];

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="app-wrap overflow-hidden relative">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=IM+Fell+Great+Primer:ital@1&display=swap" rel="stylesheet" />
      </Head>
      <Navigation pages={pages} />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;