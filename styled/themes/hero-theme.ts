import baseStyled, { ThemedStyledInterface } from 'styled-components'

export const heroTheme = {
  colors: {
    red: '#f01924',
    blue: '#68cdf2',
    yellow: '#fef107',
    brown: '#dbc395'
  },
  fonts: {
    heroName: 'Kalam',
    heroData: 'comic_panelsregular'
  }
}

export type Theme = typeof heroTheme
export const styled = baseStyled as ThemedStyledInterface<Theme>
