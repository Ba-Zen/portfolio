import React, { Component } from "react"
import styled from "@emotion/styled"
import Hero from "./Hero"

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Wrapper>
        <Hero />
      </Wrapper>
    )
  }
}

export default Landing

const Wrapper = styled.div`
  overflow: hidden;
`
