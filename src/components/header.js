import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import headerStyles from "./header.module.scss"
import { motion } from "framer-motion"

const Header = (transitionStatus) => {
  const mAboveTransition = {
    ease: "backInOut",
    duration: 0.5
  };

  const mAboveVariants = {
    entered: {
      y: ["-360%", "0%"],
      opacity: [1, 1]
    },
    exited: {
      y: ["0%", "-360%"],
      opacity: [1, 0]
    }
  };

  const mBelowTransition = {
    ease: "backInOut",
    duration: 1.3,
  };

  const mBelowVariants = {
    entered: {
      x: ["100%", "0%", "0%"],
      y: ["0%", "0%", "-88%"],
      rotate: [0, 180, 180],
      opacity: [0, 1, 1]
    },
    exited: {
      x: ["0%", "0%", "100%"],
      y: ["-88%", "0%", "0%"],
      rotate: [180, 180, 0],
      opacity: [1, 0, 0]
    }
  };

  return (
    <motion.header
      className={headerStyles.headerContainer}
      animate={transitionStatus}>
      <TransitionLink
        to={`/`}
        exit={{ length: 1 }}
        entry={{ delay: 0.6 }}
        className={headerStyles.siteTitle}
        activeClassName={headerStyles.isActive}>
        <motion.div
          transition={mAboveTransition}
          variants={mAboveVariants}>
          M
        </motion.div>
        <motion.div
          transition={mBelowTransition}
          variants={mBelowVariants}>
          M
        </motion.div>
      </TransitionLink>
    </motion.header>
  )
}

export default Header
