import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import profilePic from '../assets/img/profile-picture-small.jpg'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="All posts" />
        <div className="side">
          <a className="profile-picture-wrap" href="mailto:ux@marcelomazza.com.ar">
            <img className="profile-picture" src={profilePic} />
            <div className="profile-picture-back">
              Contact me!
            </div>
          </a>
        </div>
        <div className="content">
          <div className="headline">
            <h1>
              Marcelo Mazza
              <span className="tagline">
                <span className="is-visible">UX Developer</span>
              </span>
            </h1>
          </div>
          <p>Hola! I'm Marcelo Mazza, from Buenos Aires, Argentina. For the last 10 years I’ve been working in User Experience.</p>
          <p>I’m a problem solver, data-oriented kind of guy, and I love crafting solutions from ground-zero; wireframing, iterating, testing & coding each piece of the UX puzzle.</p>
          <p>I’ll do my best to tell you more about me...</p>
          <Link className="btn" to="/philosophy/">Read about my Philosophy</Link>
        </div>
      </Layout>
    )
  }
}

export default Index
