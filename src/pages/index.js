import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout siteTitle={siteTitle}>
        <SEO title="All posts" />
        <div className="side">
          <a className="profile-picture-wrap" href="mailto:ux@marcelomazza.com.ar">
            <img className="profile-picture" />
            <div className="profile-picture-back">
              Contact me!
            </div>
          </a>
        </div>
        <div className="content">
          <div className="headline">
            <h1>
              Marcelo Mazza
              <span className="tagline">
                <span className="is-visible">UX Developer</span>
              </span>
            </h1>
          </div>
          <p>Hola! I'm Marcelo Mazza, from Buenos Aires, Argentina. For the last 10 years I’ve been working in User Experience.</p>
          <p>I’m a problem solver, data-oriented kind of guy, and I love crafting solutions from ground-zero; wireframing, iterating, testing & coding each piece of the UX puzzle.</p>
          <p>I’ll do my best to tell you more about me...</p>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
