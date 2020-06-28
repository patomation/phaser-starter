
import Phaser from '../Phaser'
/**
 * LOADER SCREEN
 * Load all your images and sound here
 */
import logo from '../assets/images/phaser3-logo.png'
import libs from '../assets/images/libs.png'
import plasmaBundle from '../assets/glsl/plasma-bundle.glsl'
import starFields from '../assets/glsl/starfields.glsl'

export default class Loader extends Phaser.Scene {
  constructor () {
    super({ key: 'Loader' })
  }

  preload (): void {
    const progress = this.add.graphics()
    this.load.on('progress', (amount) => {
      progress.clear()
      progress.fillStyle(0xffffff, 1)
      const padding = 30
      const x = padding
      const y = (this.sys.game.config.height as number) / 2
      const width = ((this.sys.game.config.width as number - (padding * 2)) * amount)
      const height = 30
      progress.fillRect(x, y, width, height)
    })

    this.load.on('complete', () => {
      progress.destroy()
      this.scene.start('Title')
    })

    this.load.image('logo', logo)
    this.load.image('libs', libs)
    this.load.glsl('bundle', plasmaBundle)
    this.load.glsl('stars', starFields)
  }
}
