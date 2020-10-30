import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Nav from "./nav"
import headerStyles from "./header.module.scss"
import { motion, useAnimation } from "framer-motion"

const Header = (props) => {
  const colorEmphasis = '#fa0135';

  const mAboveControls = useAnimation();

  const mAboveTransition = {
    ease: "backInOut",
    duration: 0.5
  };

  mAboveControls.start({
    y: ["-350%", "0%"],
  });

  const mBelowControls = useAnimation();

  const mBelowTransition = {
    ease: "backInOut",
    duration: 1.3,
  };

  mBelowControls.start({
    x: ["100%", "0%", "0%"],
    y: ["0%", "0%", "-88%"],
    rotate: [0, 180, 180],
  });

  return (
    <header className={headerStyles.headerContainer}>
      <AniLink paintDrip hex={colorEmphasis} duration={0.5} to={`/`}
        className={headerStyles.siteTitle} activeClassName={headerStyles.isActive}>
        <motion.div
          animate={mAboveControls}
          transition={mAboveTransition}>
          M
        </motion.div>
        <motion.div
          animate={mBelowControls}
          transition={mBelowTransition}>
          M
        </motion.div>
      </AniLink>
    </header>
  )
}

export default Header
