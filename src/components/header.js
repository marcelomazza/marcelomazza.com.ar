import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = (props) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  return (
    <header className="nav-large">
      <h1 className="site-title">
        <AniLink paintDrip hex="#BD1A62" duration={0.5} to={`/`} activeClassName="active">
          {data.site.siteMetadata.title}
        </AniLink>
      </h1>
      <nav id="nav">
        <ul className="nav">
          {data.site.siteMetadata.menuLinks.map(link => (
            <li key={link.name}>
              <AniLink paintDrip hex="#BD1A62" duration={0.5} to={link.link} activeClassName="active">
                {link.name}
              </AniLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
