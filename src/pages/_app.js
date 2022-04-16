import Head from "next/head";
import "normalize.css"
import Navigation from "../components/Navigation"
import "../styles/globals.css"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const pages = [
  { href: "/", name: "Our Story" },
  { href: "/rsvp", name: "RSVP" },
  { href: "/travel-stay", name: "Travel & Stay" },
  { href: "/tables", name: "Tables" },
  { href: "/mikee", name: "Mikee" },
  { href: "/paul", name: "Paul" },
  { href: "/suppliers", name: "Suppliers" },
];

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-wrap relative">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=IM+Fell+Great+Primer:ital@1&display=swap" rel="stylesheet" />
      </Head>
      <Navigation pages={pages} />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;