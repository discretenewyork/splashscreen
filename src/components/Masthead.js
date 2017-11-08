import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const fsize = 4.2

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: -${fsize * 4}vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  a {
    color: ${props => props.theme.color.text};
    text-decoration: none;
  }
`
const Vertical = styled.h1`
  white-space: nowrap;
  user-select: none;
  transform: rotate(-90deg);
  font-size: ${fsize}vh;
  font-weight: 800;
  letter-spacing: 0.32vh;
`

const Masthead = () => (
  <Wrap>
    <Link to='/'>
      <Vertical>
        DISCRETE NEW YORK
      </Vertical>
    </Link>
  </Wrap>
)

export default Masthead
