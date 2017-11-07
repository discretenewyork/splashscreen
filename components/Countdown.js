import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  display: flex;
  flex-direction: row-reverse;
  font-size: 0.75em;
`

export default class Countdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }

    this.tick = ::this.tick
    this.target = new Date(2018, 3, 1)
  }

  componentDidMount() {
    this.interval = window.setInterval(this.tick, 9)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  tick() {
    const diff = this.target - Date.now()
    const millis = diff.toString().slice(-3)

    let secs = Math.floor(diff / 1000)
    let mins = Math.floor(secs / 60)
    let hours = Math.floor(mins / 60)
    let days = Math.floor(hours / 24)

    secs = secs % 60
    mins = mins % 60
    hours = hours % 24

    if (days < 10) days = '0' + days
    if (hours < 10) hours = '0' + hours
    if (mins < 10) mins = '0' + mins
    if (secs < 10) secs = '0' + secs

    this.setState(()=> ({ days, hours, mins, secs, millis }))
  }

  render() {
    const { days, hours, mins, secs, millis } = this.state
    return (
      <Wrap>
        00:{days}:{hours}:{mins}:{secs}:{millis}
      </Wrap>
    )
  }
}
