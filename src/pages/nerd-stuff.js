import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class NerdStuff extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout siteTitle={siteTitle} pageTitle={'Nerd stuff'}>
        Nerd stuff page
      </Layout>
    )
  }
}

export default NerdStuff

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
