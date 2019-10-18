import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class Work extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} siteTitle={siteTitle} pageTitle={'Work'}>
        Work page
      </Layout>
    )
  }
}

export default Work

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
