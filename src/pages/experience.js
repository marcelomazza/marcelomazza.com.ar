import React from "react"
import { graphql } from "gatsby"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import Container from "../components/container"
import SEO from "../components/seo"

class Experience extends React.Component {
  render() {
    const { data } = this.props
    const work = data.allMarkdownRemark.edges

    return (
      <TransitionState>
        {({ transitionStatus }) => (
          <Container transitionStatus={transitionStatus}>
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
              <TransitionLink
                className="btn"
                to="/contact-me/"
                exit={{ length: 0.5 }}
                entry={{ delay: 0.5 }}>
                Contact me
              </TransitionLink>
            </div>
          </Container>
        )}
      </TransitionState>
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
