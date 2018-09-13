import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Box } from 'rebass'

import ThemeProvider from '../ThemeProvider'
import Header from '../Header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider>
          <Fragment>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Box
              my="0"
              mx="auto"
              p="0 1.45rem 1.0875rem"
              css={{
                maxWidth: '960px'
              }}
            >
              {children}
            </Box>
          </Fragment>
        </ThemeProvider>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
