import React, { Component } from 'react'
import styled from 'styled-components'

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


export default class ContactButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailShown: false
    }
    this.a = 'info'
    this.b = 'discretenewyork'
    this.c = 'com'

    this.hideEmail = ::this.hideEmail
    this.showEmail = ::this.showEmail
    this.selectAndCopy = ::this.selectAndCopy
  }

  hideEmail() {
    this.setState(() => ({ emailShown: false }))
  }

  showEmail() {
    this.setState(() => ({ emailShown: true }), () => {
      this.input.focus()
    })
  }

  selectAndCopy() {
    this.input.select()
    try {
      document.execCommand('copy')
    } catch (e) {
      //eslint-disable-next-line no-console
      console.error(e)
    }
  }

  render() {
    const show = this.state.emailShown
    return (
      <li
        style={{ background: show ? 'white' : 'none' }}>
        {show ? (
          <SelectedText
            defaultValue={`${this.a}@${this.b}.${this.c}`}
            innerRef={ref => { this.input = ref }}
            onBlur={this.hideEmail}
            onFocus={this.selectAndCopy}
            size={23} />
        ) : (
          <a
            onClick={this.showEmail}
            href='#contact'>
            Contact
          </a>
        )}
      </li>
    )
  }
}
