import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  display: flex;
  font-size: 0.75em;
`

function pad(num) {
  if (num < 10) return `0${num}`
  return num
}


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
    this.interval = window.setInterval(this.tick, 31)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  tick() {
    const diff = this.target - Date.now()
    const millis = diff.toString().slice(-3)
    const secs = Math.floor(diff / 1000)
    const mins = Math.floor(secs / 60)
    const hours = Math.floor(mins / 60)
    const days = Math.floor(hours / 24)

    this.setState(() => ({
      days,
      hours: hours % 24,
      mins: mins % 60,
      secs: secs % 60,
      millis
    }))
  }

  render() {
    const { days, hours, mins, secs, millis } = this.state
    return (
      <Wrap>
        00:{pad(days)}:{pad(hours)}:{pad(mins)}:{pad(secs)}:{millis}
      </Wrap>
    )
  }
}
