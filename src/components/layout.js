import React from "react"
import Header from "../components/header"

import '../assets/scss/style.scss'

const Layout = (props) => {
  const { children } = props
  return (
    <div style={{paddingTop: '3rem'}}>
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
