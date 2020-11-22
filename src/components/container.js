import React from "react"
import { motion } from "framer-motion"
import Header from "../components/header"
import Nav from "../components/nav"
import containerStyles from "./container.module.scss"

import '../assets/scss/style.scss'

export default function Container({ children, transitionStatus }) {
  const navChildrenVariants = {
    entered: {
      x: ["100%", "0%" ],
      transition: {
        ease: "backInOut",
        duration: 1,
        delayChildren: 0.3
      }
    },
    exiting: {
      x: ["0%", "100%" ],
      transition: {
        ease: "backInOut",
        duration: 0.5
      }
    },
  };

  const navTransition = { ease: "anticipate" };
  const navVariants = { entered: { x: ["-100%", "0%"], opacity: [0, 1] } };

  const bkgVariants = {
    entered: {
      x: "-20%",
      transition: {
        ease: "easeOut",
        delay: 0.5
      }
    },
    exiting: {
      x: "0%",
      transition: {
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <motion.div className={containerStyles.container}
      animate={transitionStatus}>
      <motion.div
        className={containerStyles.navChildren}
        variants={navChildrenVariants}>
        <motion.div
          transition={navTransition}
          variants={navVariants}>
          <Nav />
        </motion.div>
        <div className={containerStyles.children}>
          {children}
        </div>
      </motion.div>
      <motion.div className={containerStyles.bkg} variants={bkgVariants} />
      <Header transitionStatus={transitionStatus} />
    </motion.div>
  )
}
