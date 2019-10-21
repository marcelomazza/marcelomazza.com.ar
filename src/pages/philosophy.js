import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class Philosophy extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout siteTitle={siteTitle}>
        <div className="side">
          <div class="icon-flow-children"></div>
        </div>
        <div className="content">
          <h1>Philosophy</h1>
          <h2>Understand.</h2>
          <p>Understand which are the people needs when they use your interface. Understand the goals &amp; needs of your business. If you don't know why you are doing what you are doing, it'll fall apart sooner or later.</p>
          <h2>Get the data.</h2>
          <p>To be able to understand, you need data. Learn from the real world. Data is more easy to find than ever, it's everywhere. Use it wisely, and keep using it throughout the project, before, during, after. Shape your interface around that.</p>
          <h2>Test early.</h2>
          <p>(Thanks Steve Krug for this one). Don't wait until the final polish. It will never happen. Test as soon as you can, a pencil, a paper and a coffee will do. If you don't even have that, use your competition sites. In 5 minutes you can avoid a waste of money. You already tested? Then iterate. And test again. And again.</p>
          <h2>Don't reinvent the wheel.</h2>
          <p>What a lovely phrase. There are thousands if not millions of frameworks an resources out there. The majority of them are Open Source. Use them, you'll save time and effort. You can even collaborate and make them more awesome and better.</p>
          <h2>Be prepared for failure.</h2>
          <p>It will happen. But the best of all is that you can try and keep trying. You just need the desire and hunger of doing it.</p>
          <a class="btn js-local-scroll" href="#work">See my Work &darr;</a>
        </div>
      </Layout>
    )
  }
}

export default Philosophy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`