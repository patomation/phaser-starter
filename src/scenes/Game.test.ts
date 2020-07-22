import test from 'ava'
import Loader from './Loader'
import Game from './Game'

// Local phaser instance
import * as Phaser from 'phaser'

test('Game', (t) => {
  t.plan(2)
  const game = new Phaser.Game({
    type: Phaser.HEADLESS,
    width: 800,
    height: 600,
    scene: [Loader, Game]
  })
  t.is(game.scene.scenes.length, 2)
  t.pass()
})
