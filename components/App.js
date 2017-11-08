import React from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import theme, { globalStyles } from '../theme'
import Topbar from './Topbar'
import Masthead from './Masthead'
import Footer from './Footer'

// eslint-disable-next-line
injectGlobal`${globalStyles}`

const Wrap = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Wrap>
      <Topbar />
      <Masthead />
      <Footer />
    </Wrap>
  </ThemeProvider>
)

export default App
