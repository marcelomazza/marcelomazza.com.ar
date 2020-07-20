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
            <h1>Marcelo Mazza</h1>
            <h2>Front-end Developer &amp; web designer</h2>
          </div>
          <p>Hola! I'm Marcelo Mazza, from Buenos Aires, Argentina. For the last 10 years I’ve been working in User Experience.</p>
          <p>I’m a problem solver, data-oriented kind of guy, and I love crafting solutions from ground-zero; wireframing, iterating, testing & coding each piece of the UX puzzle.</p>
          <AniLink paintDrip hex="#BD1A62" duration={0.5} to="/how-i-work/" className="btn">
            How I Work
          </AniLink>
        </div>
      </Layout>
    )
  }
}

export default Index
