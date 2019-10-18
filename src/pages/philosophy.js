import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class Philosophy extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout siteTitle={siteTitle} pageTitle={'Philosophy'}>
        Philosophy page
      </Layout>
    )
  }
}

export default Philosophy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
