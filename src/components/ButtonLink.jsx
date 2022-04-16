import Link from "next/link";
import { motion } from "framer-motion";

export default function ButtonLink({ linkProps, aProps, children }) {
  return (
    <Link {...linkProps}>
      <motion.a {...aProps} >
        {children}
      </motion.a>
    </Link>
  )
}
