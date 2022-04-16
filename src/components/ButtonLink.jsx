import Link from "next/link";
import { motion } from "framer-motion";

export default function ButtonLink({ key, linkProps, aProps, children }) {
  return (
    <Link {...linkProps} key={key} >
      <motion.a {...aProps} >
        {children}
      </motion.a>
    </Link>
  )
}
