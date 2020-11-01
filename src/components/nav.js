import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import navStyles from "./nav.module.scss"

const Nav = (props) => {
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
            <TransitionLink
              to={link.link}
              exit={{ length: 0.5 }}
              entry={{ delay: 0.5 }}
              activeClassName={navStyles.isActive}>
              {link.name}
            </TransitionLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
