import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion"
import "normalize.css"
import { useState } from "react"
import AnimSwitcher from "../components/AnimSwitcher"
import Navigation from "../components/Navigation"
import { animations } from "../lib/animations"
import "../styles/globals.css"

const pages = [
  { href: "/", name: "Our Story" },
  { href: "/travel-stay", name: "Travel & Stay" },
  // { href: "/rsvp", name: "RSVP" },
];

const animation = {
  name: "Slide Right",
  variants: {
    initial: {
      opacity: 0,
      left: "-100%",
      scale: 0.6
    },
    animate: {
      opacity: 1,
      left: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      left: "100%",
      scale: 0.6
    }
  },
  transition: {
    duration: 0.5
  }
};

function MyApp({ Component, pageProps, router }) {
  const [exitBefore, setExitBefore] = useState(false);

  return (
    <div className="app-wrap">
      <div className="ui-wrap">
        <Navigation pages={pages} />
      </div>
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={!exitBefore} >
          <m.div
            key={router.route.concat(animation.name)}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}
export default MyApp;