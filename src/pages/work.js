import React from "react"
import { Link } from "gatsby"
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
          <Link className="btn" to="/nerd-stuff/">Nerd stuff</Link>
        </div>
      </Layout>
    )
  }
}

export default Work
