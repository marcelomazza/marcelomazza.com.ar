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
        <h2>License</h2>
        <p>This is the license of the website, except the screenshots, of course. I don't know why you would do it, but if you need the code, feel free to reuse it.</p>
      </footer>
    </div>
  )
}

export default Layout
