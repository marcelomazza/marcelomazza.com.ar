import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import '../assets/scss/style.scss'

const Layout = (props) => {
  const { siteTitle, children } = props
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
  const header = (
    <header>
      <h1 className="site-title">
        <Link to={`/`}>
          {siteTitle}
        </Link>
      </h1>
      <nav id="nav">
        <ul className="nav">
          {data.site.siteMetadata.menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
  return (
    <div>
      {header}
      <main>
        <section>
          {children}
        </section>
      </main>
      <footer>
        <h2>License</h2>
        <p>This is the license of the website, except the screenshots, of course. I don't know why you would do it, but if you need the code, feel free to reuse it.</p>
      </footer>
    </div>
  )
}

export default Layout
