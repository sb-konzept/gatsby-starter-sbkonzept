import { css } from 'styled-components'
import { breakpoints } from 'utils/theme'

export const createMediaQuery = bp => `@media only screen and (max-width: ${bp})`
export const createMinMediaQuery = bp => `@media only screen and (min-width: ${bp})`

export const mediaQueries = {
  mobile: createMediaQuery(breakpoints.mobile),
  tablet: createMediaQuery(breakpoints.tablet),
  desktop: createMediaQuery(breakpoints.desktop),
  minMobile: createMinMediaQuery(breakpoints.mobile),
  minTablet: createMinMediaQuery(breakpoints.tablet),
  minDesktop: createMinMediaQuery(breakpoints.desktop)
}

export default Object.keys(mediaQueries).reduce((acc, label) => {
  acc[label] = (...args) => css`
    ${mediaQueries[label]} {
      ${css(...args)};
    }
  `

  return acc
}, {})
