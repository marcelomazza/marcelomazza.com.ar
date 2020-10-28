import React from "react"
import Nav from "../components/nav"
import layoutStyles from "./layout.module.scss"

import '../assets/scss/style.scss'

const Layout = (props) => {
  const { children } = props

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.children}>
        <Nav />
        <main>
          {children}
        </main>
      </div>
      <div className={layoutStyles.bkg} />
    </div>
  )
}

export default Layout
