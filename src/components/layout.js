import React from "react"
import layoutStyles from "./layout.module.scss"

import Header from "../components/header"

import '../assets/scss/style.scss'

const Layout = (props) => {
  const { children } = props
  return (
    <div className={layoutStyles.layout}>
      <Header />
      <main>
        <section>
          {children}
        </section>
      </main>
    </div>
  )
}

export default Layout
