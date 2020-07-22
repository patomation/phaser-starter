require('jsdom-global/register')
require('canvas')

// Handle extensions
// for phaser to work correctly during test we need to stub the png and glsl extensions
// giving them the actual path so that phaser can load something and not break.
// This is all caused by using webpacks image/file imports this wouldn't be needed with rollup
// Also this was deprecated a long time ago but this is the only solution that I have found
// that will alow me to test phaser with webpack file imports.
// So either use rollup instead or phaser not loading urls I guess.
require.extensions['.png'] = function (module) { // eslint-disable-line 
  module.exports = '../../../../src/assets/images/phaser3-logo.png'
}
require.extensions['.glsl'] = function (module) { // eslint-disable-line 
  module.exports = '../../../../src/assets/glsl/plasma-bundle.glsl'
}

// Global phaser instance
require('phaser')

// Makes headless actually work with node
require('@geckos.io/phaser-on-nodejs')

// local storage
global.localStorage = {
  getItem: () => {},
  setItem: () => {}
}
