import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Nav from "./nav"
import headerStyles from "./header.module.scss"

const Header = (props) => {
  const colorEmphasis = '#fa0135';

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
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
    </header>
  )
}

export default Header
