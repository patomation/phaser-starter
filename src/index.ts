import 'phaser'
import logo from './images/icon.png'

export default class Demo extends Phaser.Scene {
  constructor () {
    super('demo')
  }

  preload (): void {
    this.load.image('logo', logo)
    this.load.image('libs', logo)
  }

  create (): void {
    this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0)

    this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0)

    this.add.image(400, 300, 'libs')

    const logo = this.add.image(400, 70, 'logo')

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
  width: 800,
  height: 600,
  scene: Demo
}

const game = new Phaser.Game(config)
