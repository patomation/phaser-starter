
export default class Game extends Phaser.Scene {
  constructor () {
    super({ key: 'Grid' })
  }

  create (): void {
    // const board = this.rexBoard.add.board({})
    const grid = this.rexBoard.add.quadGrid({
      x: 0,
      y: 0,
      cellWidth: 64,
      cellHeight: 64,
      type: 1,
      dir: 4
    })

    const tileXY = grid.getWorldXY(0, 0)
    console.log(tileXY)

    // console.log('board', board)

    // this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0)
    // const text = this.add.text(
    //   this.sys.game.config.width as number / 2,
    //   this.sys.game.config.height as number / 2,
    //   '[ THIS IS THE GAME ]',
    //   {
    //     color: '#ffffff',
    //     fontSize: 50
    //   }
    // )
    // Center hack
    // text.x -= (text.width / 2)
  }

  rexBoard: any
}
