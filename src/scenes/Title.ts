export default class Title extends Phaser.Scene {
  constructor () {
    super({ key: 'Title' })
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

    // Start Game on any key
    this.input.keyboard.on('keydown', () => {
      this.startGame()
    })
    // Start Game on any mouse click
    this.input.on('pointerdown', () => {
      this.startGame()
    })
  }

  startGame (): void {
    this.scene.start('Game')
  }
}
