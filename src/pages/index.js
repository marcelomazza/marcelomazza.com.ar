import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionState } from "gatsby-plugin-transition-link";
import Container from "../components/container"
import styles from "./index.module.scss"

import SEO from "../components/seo"

import { motion } from "framer-motion"

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

  const titleTransition = {
    ease: "backInOut",
    duration: 1,
    times: [0, 1]
  };

  const titleVariants = {
    entered: { x: [300, 0], opacity: [0, 1] },
  }

  return (
    <TransitionState>
      {({ transitionStatus }) => {
        return (
          <Container transitionStatus={transitionStatus}>
            <SEO title="Home" />
            <div className={styles.titleContainer}>
              <motion.h1
                className={styles.title}
                animate={transitionStatus}
                transition={titleTransition}
                variants={titleVariants}
                >
                {data.site.siteMetadata.title}
                <span className={styles.subtitle}>Frontend Designer</span>
              </motion.h1>
            </div>
            <div className="content">
              <ul>
                <li>Crafting websites since 2008.</li>
                <li>+7 years of experience in top e-commerce companies</li>
                <li>+6 years (and counting) of freelance experience</li>
                <li>
                  <a href="https://www.toptal.com/resume/marcelo-mazza"
                    target="_blank">
                    Toptal Talent
                  </a> since 2015
                </li>
              </ul>
            </div>
          </Container>
        )
      }}
    </TransitionState>
  )
}

export default Index
