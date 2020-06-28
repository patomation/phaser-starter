import Phaser from '../Phaser'

export interface Options {
  scene: Phaser.Scene
  x: number
  y: number,
  key: string
  owner?: string
  rank?: number
}

// let test = null

export default class Sprite extends Phaser.GameObjects.Sprite {
  constructor ({
    scene,
    x, y,
    key
  }: Options) {
    super(scene, x, y, key)
    // test = this
    // Adds object to scene automatically
    scene.add.existing(this)
    // Allow clicking ect
    this.setInteractive()
  }

  public select (): void {
    this.setTint(0x339900)
  }

  public deselect (): void {
    this.clearTint()
  }

  public move (x: number, y: number): void {
    this.x = x
    this.y = y
  }
}
