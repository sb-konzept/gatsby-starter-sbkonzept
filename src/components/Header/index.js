import React from 'react'
import { Box, Heading } from 'rebass'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <Box mb="1.45rem" bg="blue">
    <Box
      my="0"
      mx="auto"
      py="1.45rem"
      px="1.0875rem"
      css={{
        maxWidth: '960px'
      }}
    >
      <Heading>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </Box>
  </Box>
)

export default Header
