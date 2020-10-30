import React from "react"
import { motion, useAnimation } from "framer-motion"
import Nav from "../components/nav"
import containerStyles from "./container.module.scss"

export default function Container({ children }) {
  const childrenControls = useAnimation();

  const childrenTransition = {
    ease: "backInOut",
    duration: 1.3,
    times: [0, 1]
  };

  childrenControls.start({ x: ["100%", "0%"] });

  const navControls = useAnimation();
  const navTransition = { ease: "anticipate", delay: 0.5 };

  navControls.start({ x: ["-100%", "0%"], opacity: [0, 1] });

  const bkgControls = useAnimation();
  const bkgTransition = { delay: 0.5 };

  bkgControls.start({ x: "-20%" });

  return (
    <div className={containerStyles.container}>
      <motion.div className={containerStyles.children}
        animate={childrenControls}
        transition={childrenTransition}>
        <motion.div
          animate={navControls}
          transition={navTransition}>
          <Nav />
        </motion.div>
        {children}
      </motion.div>
      <motion.div
        className={containerStyles.bkg}
        animate={bkgControls}
        transition={bkgTransition}
      />
    </div>
  )
}
