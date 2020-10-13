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
      <footer>
        <section>
          <div className="content">
            <p>Source code is licensed under the MIT license.</p>
            <p>Contents is &copy; Copyright {new Date().getFullYear()} Marcelo Mazza. All rights reserved.</p>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Layout
