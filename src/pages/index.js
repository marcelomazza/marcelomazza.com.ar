import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="content">
          <div className="headline">
            <h2 className="color-text-dark">Marcelo Mazza</h2>
            <h1>Frontend Developer <span className="color-emphasis">&amp;</span> Web Designer</h1>
          </div>
          <p>Hola! I'm Marcelo Mazza, from Buenos Aires, Argentina. For the last 10 years I’ve been working in User Experience.</p>
          <p>I’m a problem solver, data-oriented kind of guy, and I love crafting solutions from ground-zero; wireframing, iterating, testing & coding each piece of the UX puzzle.</p>
          <AniLink paintDrip hex="#e63946" duration={0.5} to="/how-i-work/" className="btn">
            How I Work
          </AniLink>
        </div>
      </Layout>
    )
  }
}

export default Index
