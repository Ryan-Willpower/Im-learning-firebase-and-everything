import React from 'react'
import { Global, css } from '@emotion/core'

const globalCSS = css`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    background: linear-gradient(to right, #485563, #293234);
    color: #fff;
  }
`

const GlobalStyle: React.FC<{}> = () => (
  <Global styles={globalCSS} />
)

export default GlobalStyle
