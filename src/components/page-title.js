import React from "react"

class PageTitle extends React.Component {
  render() {
    const { title } = this.props
    return (
      <h1>
        {title}
      </h1>
    )
  }
}

export default PageTitle
