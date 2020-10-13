import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactMe extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact Me" />
        <div className="content">
          <h1 className="color-emphasis">Contact Me</h1>
          <p><a className="btn" href="mailto:ux@marcelomazza.com.ar">ux@marcelomazza.com.ar</a></p>
        </div>
      </Layout>
    )
  }
}

export default ContactMe