import 'phaser'
import skyAsset from './images/sky.png'
import platformAsset from './images/platform.png'
import starAsset from './images/star.png'
import bombAsset from './images/bomb.png'
import dudeAsset from './images/space-dude.png'
import plasmaBundle from './vendor/plasma-bundle.glsl'
import starFields from './vendor/starfields.glsl'

let player
let platforms
let cursors
let stars
let score = 0
let scoreText
let bombs
let gameOver = false

export default class Demo extends Phaser.Scene {
  constructor () {
    super('demo')
  }

  preload (): void {
    // this.load.glsl('bundle', plasmaBundle)
    // this.load.glsl('stars', starFields)
    this.load.image('sky', skyAsset)
    this.load.image('ground', platformAsset)
    this.load.image('star', starAsset)
    this.load.image('bomb', bombAsset)
    this.load.spritesheet('dude', dudeAsset,
      { frameWidth: 32, frameHeight: 48 }
    )
  }

  create (): void {
    this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0)
    this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0)
    /**
     * WORLD
     */
    // this.add.image(400, 300, 'sky')
    platforms = this.physics.add.staticGroup()
    platforms.create(400, 568, 'ground').setScale(2).refreshBody()
    platforms.create(600, 400, 'ground')
    platforms.create(50, 250, 'ground')
    platforms.create(750, 220, 'ground')

    /**
     * PLAYER
     */
    player = this.physics.add.sprite(100, 450, 'dude')
    player.setBounce(0.2)
    player.setCollideWorldBounds(true)
    // player.body.setGravityY(300)
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    })
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: 'death',
      frames: this.anims.generateFrameNumbers('dude', { start: 9, end: 14 }),
      frameRate: 10
    })

    /**
     * BADDIES
     */
    bombs = this.physics.add.group()

    /**
     * STARS
     */
    stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    })

    stars.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
    })
    /**
     * UI
     */
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' })
    /**
     * COLLUSION
     */
    this.physics.add.collider(player, platforms)
    this.physics.add.collider(stars, platforms)
    function collectStar (player, star) {
      star.disableBody(true, true)
      score += 10
      scoreText.setText('Score: ' + score)
      // Creates bombs after all stars have been collected then drops more stars
      if (stars.countActive(true) === 0) {
        stars.children.iterate(function (child) {
          child.enableBody(true, child.x, 0, true, true)
        })
        const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)
        const bomb = bombs.create(x, 16, 'bomb')
        bomb.setBounce(1)
        bomb.setCollideWorldBounds(true)
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
      }
    }
    function hitBomb (player, bomb) {
      this.physics.pause()
      // Do something with the bomb
      bomb.disableBody(true, true)
      // Do something with the player
      player.setTint(0xff0000)
      player.anims.play('death')
      // Set game over to true so game over screen displays in update maybe?
      gameOver = true
    }
    this.physics.add.overlap(player, stars, collectStar, null, this)
    this.physics.add.collider(bombs, platforms)
    this.physics.add.collider(player, bombs, hitBomb, null, this)
  }

  update (): void {
    /**
     * Handle input
     */
    cursors = this.input.keyboard.createCursorKeys()
    // LEFT
    if (cursors.left.isDown) {
      player.setVelocityX(-160)
      player.anims.play('left', true)
    // Right
    } else if (cursors.right.isDown) {
      player.setVelocityX(160)
      player.anims.play('right', true)
    // Do nothing
    } else {
      player.setVelocityX(0)
      player.anims.play('turn')
    }
    // JUMP
    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-330)
    // Fall faster
    } else if (cursors.down.isDown && !player.body.touching.down) {
      player.setVelocityY(330)
    }
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600
  },
  scene: Demo
}

const game = new Phaser.Game(config)
