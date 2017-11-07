import React from 'react'
import styled from 'styled-components'

const fsize = 4.2

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: -${fsize * 4}vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
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
    <Vertical>
      DISCRETE NEW YORK
    </Vertical>
  </Wrap>
)

export default Masthead
