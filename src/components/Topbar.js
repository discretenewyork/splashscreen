import React from 'react'
import styled from 'styled-components'
import ComingSoon from './ComingSoon'
import Countdown from './Countdown'

const Wrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 4em;
  width: 100%;
  overflow: hidden;
  padding: 0 2em 0 0;

  line-height: 4em;
  font-size: 0.85em;

  display: flex;
  align-items: left;
  justify-content: space-between;
`

const Topbar = () => (
  <Wrap>
    <ComingSoon />
    <Countdown />
  </Wrap>
)

export default Topbar
