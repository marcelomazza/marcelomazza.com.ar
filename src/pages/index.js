import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../components/container"
import TransitionLink from "gatsby-plugin-transition-link"
import Header from "../components/header"
import styles from "./index.module.scss"

import SEO from "../components/seo"

import { motion, useAnimation } from "framer-motion"

const titleAnimation = {
  x: [100, 100, 100, 0],
  opacity: [0, 0, 1, 1]
};

const titleTransition = {
  duration: 3,
  times: [0, 0.2, 0.8, 1]
};

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

  return (
    <Container>
      <SEO title="Home" />
      <div className={styles.titleContainer}>
        <motion.h1
          animate={titleAnimation}
          className={styles.title}
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
