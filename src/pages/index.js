import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../components/container"
import TransitionLink from "gatsby-plugin-transition-link"
import styles from "./index.module.scss"

import SEO from "../components/seo"

import { motion, useAnimation } from "framer-motion"

const Index = (props) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const titleControls = useAnimation();

  titleControls.start({
    x: [300, 0],
    opacity: [0, 1]
  });

  const titleTransition = {
    ease: "backInOut",
    duration: 1.5,
    times: [0, 1]
  };

  return (
    <Container>
      <SEO title="Home" />
      <div className={styles.titleContainer}>
        <motion.h1
          className={styles.title}
          animate={titleControls}
          transition={titleTransition}
          >
          {data.site.siteMetadata.title}
          <span className={styles.subtitle}>Frontend Designer</span>
        </motion.h1>
      </div>
    </Container>
  )
}

export default Index
