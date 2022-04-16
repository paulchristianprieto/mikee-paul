import React from 'react'
import { useRouter } from "next/dist/client/router";
import ButtonLink from "./ButtonLink";
import MenuButton from "./BurgerButton/MenuButton";
import {
  AnimatePresence,
  motion
} from "framer-motion"

export default function Navigation({
  pages
}) {
  const router = useRouter();
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <div className="navigation w-full p-6 relative justify-center">
        <MenuButton
          isOpen={isOpen}
          onClick={() => setOpen(!isOpen)}
          strokeWidth="2"
          color="#081C15"
          lineProps={{ strokeLinecap: "round" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute z-20 top-6 left-6"
        />
        <div className="flex justify-center font-logo text-2xl md:text-4xl">
          Mikee & Paul
        </div>
      </div>


      <AnimatePresence exitBeforeEnter={true} >
        {isOpen && (
          <motion.div
            key="BurgerMenu"
            className="w-screen h-screen absolute bg-theme-dark z-10"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: {
                opacity: .2,
                left: "-100%",
              },
              animate: {
                opacity: 1,
                left: 0,
              },
              exit: {
                opacity: .5,
                left: "-100%",
              }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className='bg-theme-light w-full h-full p-4 pt-16 flex flex-col items-center'>
              {pages.map((page) => {
                return (
                  <ButtonLink
                    key={page.href}
                    linkProps={{href: page.href}}
                    aProps={{
                      className: `${router.route === page.href ? "selected text-theme-7" : ""} 
                        cursor-pointer max-w-max pb-2 font-cursive text-2xl md:text-4xl md:pb-4`,
                      transition: { duration: 0.2 },
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: () => setOpen(!isOpen),
                    }}
                  >
                    {page.name}
                  </ButtonLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}