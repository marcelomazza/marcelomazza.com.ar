import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

import profilePic from '../assets/img/profile-picture-small.jpg'

const interval = 60;

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="side">
          <a className="profile-picture-wrap" href="mailto:ux@marcelomazza.com.ar">
            <img className="profile-picture" src={profilePic} alt="Marcelo Mazza" />
            <div className="profile-picture-back">
              Contact me!
            </div>
          </a>
        </div>
        <div className="content">
          <div className="headline">
            <h1>
              Marcelo Mazza
              <br/>
              Front-end Developer &amp; web designer
            </h1>
          </div>
          <p>Hola! I'm Marcelo Mazza, from Buenos Aires, Argentina. For the last 10 years I’ve been working in User Experience.</p>
          <p>I’m a problem solver, data-oriented kind of guy, and I love crafting solutions from ground-zero; wireframing, iterating, testing & coding each piece of the UX puzzle.</p>
          <p>I’ll do my best to tell you more about me...</p>
          <AniLink paintDrip hex="#BD1A62" duration={0.5} to="/philosophy/" className="btn">
            Read about my Philosophy
          </AniLink>
        </div>
      </Layout>
    )
  }
}

export default Index
