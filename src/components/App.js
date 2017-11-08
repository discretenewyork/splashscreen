import React from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { HashRouter as Router, Route } from 'react-router-dom'
import theme, { globalStyles } from '../theme'
import Topbar from './Topbar'
import Masthead from './Masthead'
import Footer from './Footer'
import * as copyText from '../copyText'

// eslint-disable-next-line
injectGlobal`${globalStyles}`

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const Content = styled.div`
  position: relative;
  height: 100%;
  overflow-y: auto;
  z-index: -1;
  font-size: 1.25em;
  letter-spacing: 0.5px;
  padding-top 4em;
  padding-bottom: 4em;

  @media (max-width: 650px) {
    font-size: 1em;
    padding-right: 2em;
    padding-left: 8vh;
  }
`

const TextWrap = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Wrap>
        <Topbar />
        <Masthead />
        <Content>
          <Route
            path='/about'
            render={() => (
              <TextWrap>
                {copyText.about}
              </TextWrap>
            )} />
          <Route
            path='/internships'
            render={() => (
              <TextWrap>
                {copyText.interns}
              </TextWrap>
            )} />
        </Content>
        <Footer />
      </Wrap>
    </Router>
  </ThemeProvider>
)

export default App
