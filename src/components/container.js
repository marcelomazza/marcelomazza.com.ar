import React from "react"
import { motion, useAnimation } from "framer-motion"
import Nav from "../components/nav"
import containerStyles from "./container.module.scss"

export default function Container({ children }) {
  const controls = useAnimation();

  controls.start({
    x: ["100%", "50%", "50%", "0%"]
  });
  // controls.start();

  const transition = {
    ease: "backInOut",
    duration: 3,
    times: [0, 0.4, 0.7, 1]
  };

  return (
    <div className={containerStyles.container}>
      <motion.div className={containerStyles.children}
        animate={controls}
        transition={transition}>
        <motion.div
          animate={{ x: ["-100%", "0%"], opacity: [0, 1] }}
          transition={{ ease: "anticipate", delay: 2 }}>
          <Nav />
        </motion.div>
        {children}
      </motion.div>
      <div className={containerStyles.bkg} />
    </div>
  )
}
