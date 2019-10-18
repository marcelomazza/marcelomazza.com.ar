import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} siteTitle={siteTitle} pageTitle={'Marcelo Mazza - UX Designer'}>
        <SEO title="All posts" />
        <p>Hola! I'm Marcelo Mazza, from Buenos Aires, Argentina. For the last 10 years I’ve been working in User Experience.</p>
        <p>I’m a problem solver, data-oriented kind of guy, and I love crafting solutions from ground-zero; wireframing, iterating, testing & coding each piece of the UX puzzle.</p>
        <p>I’ll do my best to tell you more about me...</p>
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
