import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import '../assets/scss/style.scss'

import PageTitle from "../components/page-title"

const Layout = (props) => {
  const { siteTitle, pageTitle, children } = props
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
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
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
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      {header}
      <PageTitle title={pageTitle} />
      <main>
        <section>
          {children}
        </section>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
