import 'phaser'
import BoardPlugin from 'phaser3-rex-plugins/plugins/board-plugin.js'
import './style/main.sass'

import Loader from './scenes/Loader'
import Title from './scenes/Title'
import Game from './scenes/Game'
import Grid from './scenes/Grid'

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#000000',
  // Stuff that makes the game responsive
  scale: {
    mode: Phaser.Scale.RESIZE,
    parent: 'phaser',
    // autoCenter: Phaser.Scale.CENTER_BOTH,
    width: vw,
    height: vh
  },
  scene: [
    Grid
  ],
  plugins: {
    scene: [{
      key: 'rexBoard',
      plugin: BoardPlugin,
      mapping: 'rexBoard'
    }]
  },
  pixelArt: true
}
const game = new Phaser.Game(config) // eslint-disable-line 
