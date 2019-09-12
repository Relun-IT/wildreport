import React from "react"
import PropTypes from "prop-types"
import { Hero } from "./Home/Hero"
import { TopNotification } from "./Home/TopNotification"
import { Menu } from "./Home/Menu"

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopNotification />
        <Menu />
        <Hero />
      </React.Fragment>
    )
  }
}

export default Home
