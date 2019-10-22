import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

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
        <Link to={`/`}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav id="nav">
        <ul className="nav">
          {data.site.siteMetadata.menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.link} activeClassName="active">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
