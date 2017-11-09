import React, { Component } from 'react'
import styled from 'styled-components'
import MobileDetect from 'mobile-detect'

const SelectedText = styled.input`
  border: 1px solid ${props => props.theme.color.text};
  border-radius: 0;
  background: white;
  box-shadow: none;
  z-index: 99;
  outline: none;
  margin: 0;
  padding: 0.25em 0.5em;
  font-family: ${props => props.theme.font.mono};
  color: ${props => props.theme.color.text};
  text-align: center;
`

function make() {
  return `${this.a}@${this.b}.${this.c}`
}

export default class ContactButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailShown: false
    }
    this.a = 'info'
    this.b = 'discretenewyork'
    this.c = 'com'
    this.detect = new MobileDetect(window.navigator.userAgent)

    this.hideEmail = ::this.hideEmail
    this.showEmail = ::this.showEmail
  }

  hideEmail() {
    this.setState(() => ({ emailShown: false }))
  }

  showEmail() {
    this.setState(() => ({ emailShown: true }), () => {
      if (this.input) {
        this.input.focus()
        this.input.select()
        try {
          document.execCommand('copy')
        } catch (e) {
          //eslint-disable-next-line no-console
          console.error(e)
        }
      }
    })
  }

  render() {
    const show = this.state.emailShown
    let email
    if (this.detect.mobile()) {
      email = (
        <a href={`mailto:${this::make()}`}>
          {this::make()}
        </a>)
    } else {
      email = (
        <SelectedText
          defaultValue={`${this::make()}`}
          innerRef={ref => { this.input = ref }}
          onBlur={this.hideEmail}
          size={23} />)
    }
    return (
      <li
        style={{ background: show ? 'white' : 'none' }}>
        {show ? email : (
          <a
            onClick={this.showEmail}
            href='#contact'>
            Contact
          </a>
        )}
      </li>)
  }
}
