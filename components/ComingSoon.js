import React, { Component } from 'react'
import styled from 'styled-components'

const Dot = styled.span`
  font-family: 'sans-serif';
  font-weight: 800;
  color: ${({ theme }) => theme.color.red};
  margin-right: 0.3em;
`

const Wrap = styled.span`
  font-family: ${({ theme }) => theme.font.serif};
  font-weight: 800;
  display: flex;
  flex-direction: row-reverse;
  margin-left: 3.5vh;
  text-transform: uppercase;
`

export default class ComingSoon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recDot: false
    }
    this.flicker = ::this.flicker
  }

  componentDidMount() {
    this.interval = window.setInterval(this.flicker, 500)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  flicker() {
    this.setState(state => ({ recDot: !state.recDot }))
  }

  render() {
    return (
      <Wrap>
        <Dot style={{ visibility: this.state.recDot ? 'visible' : 'hidden' }}>
          {'•'}
        </Dot>
        Coming soon
      </Wrap>
    )
  }
}
