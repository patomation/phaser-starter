import test from 'ava'
import Loader from './Loader'

// Local phaser instance
import * as Phaser from 'phaser'

test('Loader', (t) => {
  t.plan(2)
  const game = new Phaser.Game({
    type: Phaser.HEADLESS,
    width: 800,
    height: 600,
    scene: Loader
  })
  t.is(game.scene.scenes.length, 1)
  t.pass()
})
