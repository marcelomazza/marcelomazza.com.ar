import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"

class Work extends React.Component {
  render() {
    return (
      <Layout>
        <div className="side">
          <div class="icon-flow-children"></div>
        </div>
        <div className="content">
          <h1>Work</h1>
          <AniLink paintDrip hex="#BD1A62" duration={0.5} to="/nerd-stuff/" className="btn">
            Nerd stuff
          </AniLink>
        </div>
      </Layout>
    )
  }
}

export default Work
