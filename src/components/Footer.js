import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ContactButton from './ContactButton'

const Wrap = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3em;
  padding: 0 1em;
`

const Menu = styled.ul`
  display: flex;
  flex: 1 1 auto;
  padding: 0;
  margin: 0;
  width: 50%;
  height: 100%;
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
    background: white;
  }
`

const Footer = () => (
  <Wrap>
    <Menu>
      <ContactButton />
    </Menu>
    <Menu style={{ flexDirection: 'row-reverse' }}>
      <Link to='/internships'>
        <li>internships</li>
      </Link>
      <Link to='/about'>
        <li>about</li>
      </Link>
    </Menu>
  </Wrap>
)

export default Footer
