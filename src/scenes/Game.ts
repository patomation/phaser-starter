export default class Game extends Phaser.Scene {
  constructor () {
    super({ key: 'Game' })
  }

  create (): void {
    this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0)
    const text = this.add.text(
      this.sys.game.config.width as number / 2,
      this.sys.game.config.height as number / 2,
      '[ THIS IS THE GAME ]',
      {
        color: '#ffffff',
        fontSize: 50
      }
    )
    // Center hack
    text.x -= (text.width / 2)
  }
}
