/**
 *
 * ThemeProvider
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as BaseProvider } from 'styled-components'
import theme from './theme'

import './globalStyles'

function ThemeProvider (props) {
  const { children } = props
  return React.createElement(BaseProvider, { theme }, children)
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeProvider
