import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import navStyles from "./nav.module.scss"

const Nav = (props) => {
  const colorEmphasis = '#fa0135';

  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <nav className={navStyles.navContainer}>
      <ul className={navStyles.navList}>
        {data.site.siteMetadata.menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}
              activeClassName={navStyles.isActive}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
