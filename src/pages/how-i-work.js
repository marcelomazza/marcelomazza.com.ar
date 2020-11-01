import React from "react"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import Container from "../components/container"
import SEO from "../components/seo"

class HowIWork extends React.Component {
  render() {
    return (
      <TransitionState>
        {({ transitionStatus }) => (
          <Container transitionStatus={transitionStatus}>
            <SEO title="How I Work" />
            <div className="content">
              <h1 className="color-emphasis">How I Work</h1>
              <h2>Get the data.</h2>
              <p>Learn from the real world. Data is easier to find than ever, it's everywhere. Use it wisely, and keep using it throughout the project, before, during, after. Shape your interface around it.</p>
              <h2>Understand....</h2>
              <p>...people's needs when using an interface. Understand your business' goals &amp; needs. If you don't know the why, think again.</p>
              <h2>Test early.</h2>
              <p>And iterate fast. Don't wait until the final polish. It will never happen. Test as soon as you can; pen, paper and a coffee will do. If you don't even have that, use your competition sites. Already tested? Then iterate. And test again. And again.</p>
              <h2>Don't reinvent the wheel.</h2>
              <p>Don't overthink it. Use already existing resources. Use the saved time and iterate a bit more.</p>
              <h2>Be prepared for failure.</h2>
              <p>It will happen. An excellent excuse to... iterate again.</p>
              <TransitionLink
                className="btn"
                to="/experience/"
                exit={{ length: 0.5 }}
                entry={{ delay: 0.5 }}>
                Experience
              </TransitionLink>
            </div>
          </Container>
        )}
      </TransitionState>
    )
  }
}

export default HowIWork
