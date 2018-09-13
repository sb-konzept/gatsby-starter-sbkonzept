/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { storiesOf } from '@storybook/react'
// import { withKnobs, select } from '@storybook/addon-knobs/react'

import Header from './index'

storiesOf('Header', module)
  // .addDecorator(withKnobs)
  // .addDecorator(story => <Container>{story()}</Container>)
  .add('default', () => <Header />)
