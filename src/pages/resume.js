import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Resume extends React.Component {
  render() {
    const { data } = this.props
    const work = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO title="Resume" />
        <div className="side">
          <div className="icon-eye"></div>
        </div>
        <div className="content">
          <h1>Resume</h1>
          {work.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <h2>
                  {title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: node.html,
                  }}
                />
              </article>
            )
          })}
          <AniLink paintDrip hex="#BD1A62" duration={0.5} to="/contact-me/" className="btn">
            Contact me
          </AniLink>
        </div>
      </Layout>
    )
  }
}

export default Resume

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___order] },
      filter: { fileAbsolutePath: {regex : "\/resume/"} }
    ) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            order
            title
          }
        }
      }
    }
  }
`
