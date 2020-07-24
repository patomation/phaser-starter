
const COLOR_PRIMARY = 0x03a9f4
const COLOR_LIGHT = 0x67daff
const COLOR_DARK = 0x007ac1

export default class Game extends Phaser.Scene {
  constructor () {
    super({ key: 'Grid' })
  }

  // Not necessary to load from cdn since plugin is installed with npm
  // preload () {
  //   this.load.scenePlugin({
  //     key: 'rexboardplugin',
  //     url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexboardplugin.min.js',
  //     sceneKey: 'rexBoard'
  //   })
  // }

  create () {
    const gridGraphics = this.add.graphics({
      lineStyle: {
        width: 1,
        color: COLOR_DARK,
        alpha: 1
      }
    })

    const grid = this.rexBoard.add.quadGrid({
      x: 0,
      y: 0,
      cellWidth: 64,
      cellHeight: 64,
      type: 0,
      dir: 4
    })

    const board = this.rexBoard.add.board({
      grid,
      // grid: getHexagonGrid(this),
      // grid: getQuadGrid(this),
      width: 20,
      height: 18
    })
      .forEachTileXY(function (tileXY, board) {
        const points = board.getGridPoints(tileXY.x, tileXY.y, true)
        gridGraphics.strokePoints(points, true)
      }, this)

    board
      .setInteractive()
      .on('tiledown', function (pointer, tileXY) {
        Phaser.Actions.Call(board.tileZToChessArray(0), function (gameObject) {
          gameObject.destroy()
        }, {})

        if (!board.contains(tileXY.x, tileXY.y)) {
          return
        }

        this.rexBoard.add.shape(board, tileXY.x, tileXY.y, 0, COLOR_PRIMARY).setScale(0.7)
        // const resultTileXYArray = board.getTileXYAtDirection(tileXY, [0, 2, 4], { end: 3 })
        // let resultTileXY
        // for (let i = 0, cnt = resultTileXYArray.length; i < cnt; i++) {
        //   resultTileXY = resultTileXYArray[i]
        //   if (!board.contains(resultTileXY.x, resultTileXY.y)) {
        //     continue
        //   }
        //   this.rexBoard.add.shape(board, resultTileXY.x, resultTileXY.y, 0, COLOR_LIGHT).setScale(0.7)
        // }
      }, this)
  }

  rexBoard: any
}

function getQuadGrid (scene) {
  const grid = scene.rexBoard.add.quadGrid({
    x: 400,
    y: 100,
    cellWidth: 100,
    cellHeight: 50,
    type: 1
  })
  return grid
}

function getHexagonGrid (scene) {
  const staggeraxis = 'x'
  const staggerindex = 'odd'
  const grid = scene.rexBoard.add.hexagonGrid({
    x: 50,
    y: 50,
    cellWidth: 36,
    cellHeight: 36,
    staggeraxis: staggeraxis,
    staggerindex: staggerindex
  })
  return grid
}
