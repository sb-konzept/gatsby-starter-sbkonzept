import React from 'react'
import styled from 'styled-components'
import { util } from 'styled-system'
import { Link } from 'gatsby'

const HeaderLink = styled(Link)`
  > h1 {
    margin: 0;
    color: ${util.themeGet('colors.white')};
    text-decoration: none;

    &:hover {
      color: ${util.themeGet('colors.white')};
    }
  }
`

function Header (props) {
  const { children, ...rest } = props
  return (
    <div {...rest}>
      <HeaderLink to="/">
        <h1>{children}</h1>
      </HeaderLink>
    </div>
  )
}

const StyledHeader = styled(Header)`
  background-color: ${util.themeGet('colors.primary')};
  padding: 1.5rem;
`

export default StyledHeader
