import 'phaser'
import logo from './images/phaser3-logo.png'
import libs from './images/libs.png'
import plasmaBundle from './vendor/plasma-bundle.glsl'
import starFields from './vendor/starfields.glsl'

export default class Demo extends Phaser.Scene {
  constructor () {
    super('demo')
  }

  preload (): void {
    this.load.image('logo', logo)
    this.load.image('libs', libs)
    this.load.glsl('bundle', plasmaBundle)
    this.load.glsl('stars', starFields)
  }

  create (): void {
    this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0)

    this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0)

    this.add.image(400, 300, 'libs')

    const logo = this.add.image(400, 70, 'logo')

    this.add.text(10, 10, 'NOW WITH CONTINUOUS DEPLOYMENT!!!!')

    this.tweens.add({
      targets: logo,
      y: 350,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    })
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#125555',
  // Stuff that makes the game responsive
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
