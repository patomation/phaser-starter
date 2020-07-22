import test from 'ava'
import Loader from './Loader'
import Title from './Title'

// Local phaser instance
import * as Phaser from 'phaser'

test('Title', (t) => {
  t.plan(2)
  const game = new Phaser.Game({
    type: Phaser.HEADLESS,
    width: 800,
    height: 600,
    scene: [Loader, Title]
  })
  t.is(game.scene.scenes.length, 2)
  t.pass()
})
