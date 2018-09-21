const baseFontSize = 16

const colors = {
  primary: '#07c',
  lightgray: '#f6f6ff',
  white: '#fff',
  header: '#000',
  body: '#0c0c0c'
}

export const breakpoints = {
  mobile: '40rem',
  tablet: '54rem',
  desktop: '70rem'
}

const theme = {
  baseFontSize,
  breakpoints: [breakpoints.mobile, breakpoints.tablet, breakpoints.desktop],
  maxWidth: breakpoints.desktop,
  colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256].map(s => `${s / baseFontSize}rem`)
}

export default theme
