import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"
import Nav from "../components/nav"
import styles from "./index.module.scss"

import SEO from "../components/seo"

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
        <Nav />
        <h1 className={styles.title}>
          {data.site.siteMetadata.title}
          <span className={styles.subtitle}>Frontend Designer</span>
        </h1>
      </div>
    </Container>
  )
}

export default Index
