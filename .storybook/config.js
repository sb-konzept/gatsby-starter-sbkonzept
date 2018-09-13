import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import StoryContainer from './StoryContainer'
import ThemeProvider from '../src/components/ThemeProvider'

configureViewport({
  viewports: INITIAL_VIEWPORTS,
  defaultViewport: 'iphone6',
})

const reqComponents = require.context('../src', true, /stories\.js$/)

function loadStories() {
  reqComponents.keys().forEach(filename => reqComponents(filename))
}

addDecorator(story => (
  <ThemeProvider>
    <StoryContainer>{story()}</StoryContainer>
  </ThemeProvider>
))

configure(loadStories, module)
