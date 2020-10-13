import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Experience extends React.Component {
  render() {
    const { data } = this.props
    const work = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO title="Experience" />
        <div className="content">
          <h1 className="color-emphasis">Experience</h1>
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
          <AniLink paintDrip hex="#e63946" duration={0.5} to="/contact-me/" className="btn">
            Contact me
          </AniLink>
        </div>
      </Layout>
    )
  }
}

export default Experience

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___order] },
      filter: { fileAbsolutePath: {regex : "\/experience/"} }
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
