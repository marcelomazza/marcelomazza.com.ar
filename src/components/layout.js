import React from "react"
import Header from "../components/header"

import '../assets/scss/style.scss'

const Layout = (props) => {
  const { children } = props
  return (
    <div style={{background: 'white'}}>
      <Header />
      <main>
        <section>
          {children}
        </section>
      </main>
      <footer>
        <section>
          <div class="side">
            <h2>The End</h2>
          </div>
          <div class="content">
            <p>Source code is licensed under the MIT license.</p>
            <p>Contents is &copy; Copyright 2019 Marcelo Mazza. All rights reserved.</p>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Layout
