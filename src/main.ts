import { Canvas } from './modules/canvas.js'
import * as utils from './modules/shapes.js'

const canvasPanel = document.querySelector('.canvas-panel')
let myCanvas = new Canvas(canvasPanel, 1000, 600) // parent, width, height
myCanvas.create()

const COUNT = 1000
const blocks = utils.makeBlocks(COUNT)

let prevTime

const init = timestamp => {
  prevTime = timestamp
  requestAnimationFrame(step)
}

requestAnimationFrame(init)

const step = timestamp => {
  const elapsed = timestamp - prevTime
  prevTime = timestamp

  utils.moveBlocks(blocks, elapsed * 0.1)

  utils.paintBackground(myCanvas.ctx, myCanvas.width, myCanvas.height)

  const centerX = myCanvas.width / 2
  const centerY = myCanvas.height / 2

  for (let i = 0; i < COUNT; i++) {
    const block = blocks[i]
    const x = centerX + block.x / (block.z * 0.001)
    const y = centerY + block.y / (block.z * 0.001)
    const rgbArr = block.color

    if (x < 0 || x >= myCanvas.width || y < 0 || y >= myCanvas.height) {
      continue
    }
  
    const d = block.z / 1000
    const a = 1 - d * d
  
    utils.paintBlock(myCanvas, x, y, a, rgbArr, block.shapeName, block.random)
  }

  requestAnimationFrame(step)
}
