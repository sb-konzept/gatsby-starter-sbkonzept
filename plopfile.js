/* eslint-disable import/no-extraneous-dependencies */
const plopPreset = require('plop-preset-sbkonzept')
const path = require('path')

module.exports = plopPreset({
  baseDir: path.resolve(__dirname, 'src')
})
