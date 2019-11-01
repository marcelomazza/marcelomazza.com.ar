import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class NerdStuff extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Nerd stuff" />
        <div className="side">
          <div className="icon-flow-children"></div>
        </div>
        <div className="content">
          <h1>Nerd stuff</h1>
          <h2>Backstage</h2>
          <p>This is a plain HTML website. I'm using:</p>
          <ul>
            <li><a href="http://www.google.com/fonts">Google Fonts</a></li>
            <li><a href="https://github.com/aFarkas/html5shiv">HTML5 Shiv</a></li>
            <li><a href="http://sass-lang.com/">SASS</a></li>
            <li><a href="http://jquery.com/">jQuery</a></li>
            <li><a href="http://getbootstrap.com/">Bootstrap</a> (custom build with just the "scrollspy" component)</li>
          </ul>
          <p>As a good portfolio, it's never finished. I've tried to keep it as simple as it can, so here are a couple of things that I normally use but you won't see here now (but can appear in any moment):</p>
          <ul>
            <li>Modernizr</li>
            <li>Require.js</li>
            <li>OOCSS or BEM or SMACSS</li>
            <li>CSS and JS compression &amp; minification</li>
            <li>SEO optimization</li>
            <li>Accesibility &amp; validation :)</li>
          </ul>
          <p>If you want to check the code, you can find this site in Github.</p>
          <a className="btn" href="https://github.com/marcelomazza/marcelomazza.com.ar">Check code at Github</a>
            <h2>My Tool Belt</h2>
            <p>Fireworks (RIP). Sublime Text 2 + Emmet (ex Zen Coding). LESS. SASS + Compass. Grunt (with LiveReload!). Bower. Yeoman. Modernizr. Git & Github.</p>
            <h2>I keep updated with</h2>
            <p>Blogs: A List Apart, Smashing Magazine, CSS Tricks, Netttuts+, 24 ways, CSS Wizardry and a lot more. Weekly news: Web Design Weekly, CSS Weekly, HTML5 Weekly, JavaScript Weekly, wpMail.me.</p>
            <h2>Hobbies</h2>
            <p>My work is my hobbie! (I swear I'm a happy guy :P). I keep reading and trying new UX things. I love reading. I love music. I love movies. I love traveling and knowing new places.</p>
            <h2>Contact me</h2>
            <p><a className="btn" href="mailto:ux@marcelomazza.com.ar">ux@marcelomazza.com.ar</a></p>
          <h2>Playground: Chrome Extension</h2>
          <p>I did it a couple of months ago, based on caniuse.com site. Check it out! <a target="_blank" href="https://chrome.google.com/webstore/detail/can-i-use/kinefpelfmogilfkmjlbfkamgmofmedf">Can I Use? Chrome Extension</a>. You can also check <a target="_blank" href="http://github.com/marcelomazza/caniuse-chrome-extension">it's source code</a>.</p>
        </div>
      </Layout>
    )
  }
}

export default NerdStuff
