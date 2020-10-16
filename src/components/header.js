import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import headerStyles from "./header.module.scss"

const colorEmphasis = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-emphasis') || '#fa0135';

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
    <header className={headerStyles.headerContainer}>
      <AniLink paintDrip hex={colorEmphasis} duration={0.5} to={`/`}
        className={headerStyles.siteTitle} activeClassName={headerStyles.isActive}>
        {data.site.siteMetadata.title}
      </AniLink>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          {data.site.siteMetadata.menuLinks.map(link => (
            <li key={link.name}>
              <AniLink paintDrip hex={colorEmphasis} duration={0.5} to={link.link}
                activeClassName={headerStyles.isActive}>
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
