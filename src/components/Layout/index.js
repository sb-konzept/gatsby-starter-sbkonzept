import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import media from 'utils/mediaQuery'
import ThemeProvider from 'components/ThemeProvider'
import Header from 'components/Header'

const LayoutNav = styled.nav``
const LayoutContent = styled.main``
const LayoutSide = styled.aside``
const LayoutHeader = styled.header`
  flex: none;
`
const LayoutFooter = styled.footer`
  flex: none;
`
const LayoutBody = styled.div`
  display: flex;
  flex-direction: column;

  ${LayoutNav} {
    order: -1;
  }

  ${media.minTablet`
    flex-direction: row;
    flex: 1;
    ${LayoutContent} {
      flex: 1;
    }

    ${LayoutNav}, ${LayoutSide} {
      flex: 0 0 15rem;
    }
  `};
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            lang
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        >
          <html lang={data.site.siteMetadata.lang} />
        </Helmet>
        <ThemeProvider>
          <Fragment>
            <LayoutHeader>
              <Header>{data.site.siteMetadata.title}</Header>
            </LayoutHeader>
            <LayoutBody>
              <LayoutContent>{children}</LayoutContent>
              <LayoutNav />
              <LayoutSide />
            </LayoutBody>
            <LayoutFooter />
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
