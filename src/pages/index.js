import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Container from "../components/container"
import Header from "../components/header"
import styles from "./index.module.scss"

import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <SEO title="Home" />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Marcelo
            <br/>
            Mazza
            <span className={styles.subtitle}>Frontend Designer</span>
          </h1>
        </div>
      </Container>
    )
  }
}

export default Index
