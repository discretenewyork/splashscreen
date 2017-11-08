import React from 'react'
import styled from 'styled-components'

const Wrap = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3em;
  padding: 0 1em;
`

const RightMenu = styled.ul`
  padding: 0;
  margin: 0;
  width: 32%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  list-style: none;

  a {
    color: ${props => props.theme.color.text};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.color.blue};
      text-decoration: underline;
    }
  }

  li {
    font-family: ${props => props.theme.font.mono};
    padding: 0;
    margin: 0 1.5em;
    font-size: 0.8em;
    line-height: 3em;
    display: block;
    letter-spacing: 0.5px;
    text-transform: lowercase;
  }
`

const Footer = () => (
  <Wrap>
    <RightMenu>
      <a href='mailto:info@discretenewyork.com'>
        <li>contact</li>
      </a>
      <a href='#interns'>
        <li>internships</li>
      </a>
    </RightMenu>
  </Wrap>
)

export default Footer
