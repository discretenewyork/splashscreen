const theme =  {
  font: {
    serif: '"Yantramanav", -apple-system, system-ui, BlinkMacSystemFont, Helvetica, sans-serif;',
    mono: '"Roboto Mono", "SF Mono", "Monaco", monospace;'
  },
  color: {
    white: '#fefefe',
    black: '#20272d',
    gray: '#dce1e6',

    red: '#ff3b30',
    orange: '#ff9500',
    yellow: '#ffcc00',
    green: '#4cd964',
    tealBlue: '#5ac8fa',
    blue: '#007aff',
    purple: '#5856d6',
    pink: '#ff2d55',

    text: '#20272d',
    inactive: '#7a8691',
    border: '#20272d',

    darkWhite: '#f3f5f6',
    bloomberg: '#2800d8'
  }
}

export const globalStyles = `
  html, body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: ${theme.color.white};
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: ${theme.font.serif};
    color: ${theme.color.text};
    -webkit-overflow-scrolling: touch;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  #root {
    height: 100%;
  }
`

export default theme
