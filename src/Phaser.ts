/**
 * A Custom Phaser Build that is NOT global
 */
import CONST from 'phaser/src/const'
import Extend from 'phaser/src/utils/object/Extend'

import Actions from 'phaser/src/actions'
import Animations from 'phaser/src/animations'
import Cache from 'phaser/src/cache'
import Cameras from 'phaser/src/cameras'
import Core from 'phaser/src/core'
import Class from 'phaser/src/utils/Class'
import Create from 'phaser/src/create'
import Curves from 'phaser/src/curves'
import Data from 'phaser/src/data'
import Display from 'phaser/src/display'
import DOM from 'phaser/src/dom'
import Events from 'phaser/src/events/EventEmitter'
import Game from 'phaser/src/core/Game'
import GameObjects from 'phaser/src/gameobjects'
import Geom from 'phaser/src/geom'
import Input from 'phaser/src/input'
import Loader from 'phaser/src/loader'
import PhaserMath from 'phaser/src/math'
import Physics from 'phaser/src/physics'
import Plugins from 'phaser/src/plugins'
import Renderer from 'phaser/src/renderer'
import Scale from 'phaser/src/scale'
import Scene from 'phaser/src/scene/Scene'
import Scenes from 'phaser/src/scene'
import Sound from 'phaser/src/sound'
import Structs from 'phaser/src/structs'
import Textures from 'phaser/src/textures'
import Tilemaps from 'phaser/src/tilemaps'
import Time from 'phaser/src/time'
import Tweens from 'phaser/src/tweens'
import Utils from 'phaser/src/utils'

const Phaser = {
  Actions,
  Animations,
  Cache,
  Cameras,
  Core,
  Class,
  Create,
  Curves,
  Data,
  Display,
  DOM,
  Events,
  Game,
  GameObjects,
  Geom,
  Input,
  Loader,
  Math: PhaserMath,
  Physics,
  Plugins,
  Renderer,
  Scale,
  Scene,
  Scenes,
  Sound,
  Structs,
  Textures,
  Tilemaps,
  Time,
  Tweens,
  Utils
}

// this weird syntax grabs the global object
// const global = (0, eval)('this')
const PhaserInstance = Extend(false, Phaser, CONST)
// export default PhaserInstance
export default PhaserInstance
