import React from 'react'
import App from 'next/app'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { HeroProvider } from 'contexts/heroContext'
import { heroTheme } from 'styled/hero-theme'
import { GlobalStyles } from 'styled/global.styled'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Helmet>
          <title>NextHeroes</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <HeroProvider>
          <ThemeProvider theme={heroTheme}>
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
        </HeroProvider>
      </>
    )
  }
}
export default MyApp
