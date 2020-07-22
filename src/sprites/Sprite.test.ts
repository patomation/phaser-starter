import test from 'ava'
import Sprite from './Sprite'

// Local phaser instance
import * as Phaser from 'phaser'
let scene: Phaser.Scene
const game = new Phaser.Game({
  type: Phaser.HEADLESS,
  width: 800,
  height: 600,
  scene: {
    create () {
      scene = this
    }
  }
})

test('Sprite', (t) => {
  t.plan(3)
  const sprite = new Sprite({
    scene,
    x: 0,
    y: 0,
    key: 'mock-texture'
  })
  t.is(typeof sprite, 'object')
  t.is(game.scene.scenes.length, 1)
  t.pass()
})
