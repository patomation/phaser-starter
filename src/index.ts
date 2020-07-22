import 'phaser'
import Loader from './scenes/Loader'
import Title from './scenes/Title'
import Game from './scenes/Game'

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#000000',
  // Stuff that makes the game responsive
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600
  },
  scene: [
    Loader,
    Title,
    Game
  ]
}

const game = new Phaser.Game(config) // eslint-disable-line 
