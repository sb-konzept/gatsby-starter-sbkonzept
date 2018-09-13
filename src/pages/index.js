import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import Layout from '../components/Layout'

const Test = styled.h1`
  color: red;
`

const IndexPage = () => (
  <Layout>
    <Test>Hi people</Test>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
