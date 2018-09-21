import Typography from 'typography'
import gray from 'gray-percentage'

import theme from 'utils/theme'
import { mediaQueries } from 'utils/mediaQuery'

const typography = new Typography({
  baseFontSize: `${theme.baseFontSize}px`,
  baseLineHeight: 1.45,
  blockMarginBottom: 0.8,
  googleFonts: [
    {
      name: 'Lato',
      styles: ['700']
    },
    {
      name: 'Open Sans',
      styles: ['400', '400i', '700', '700i']
    }
  ],
  headerFontFamily: ['Lato', 'sans-serif'],
  headerColor: theme.colors.header,
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  bodyColor: theme.colors.body,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1.1
    },
    a: {
      color: theme.colors.primary,
      textDecoration: 'none'
    },
    'a:hover,a:active': {
      color: options.bodyColor
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`
    },
    'blockquote > :last-child': {
      marginBottom: 0
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight
    },
    'blockquote cite:before': {
      content: '"— "'
    },
    [mediaQueries.maxMobile]: {
      html: {
        fontSize: `${(16 / 16) * 100}%`
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16)
      }
    }
  })
})

export default typography
