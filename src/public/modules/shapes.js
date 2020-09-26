const DISTANCE = 1000
const LENGTH = 6

const degToRad = degress => {
  return degress * Math.PI / 100
}

const random = (min, max) => {
  return Math.floor((max - min) * Math.random()) + min
}

class Square {
  constructor(ctx, x, y, length, color) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.length = length
    this.color = color
  }
  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.length, this.length)
  }
}

class Circle {
  constructor(ctx, x, y, length, color) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = length / 2
    this.color = color
  }
  draw() {
    this.ctx.fillStyle = this.color

    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, degToRad(0), degToRad(360), false)
    this.ctx.fill()
  }
}

class Triangle {
  constructor (ctx, x, y, length, color) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.length = length
    this.color = color
  }
  draw () {
    this.ctx.fillStyle = this.color
    
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.lineTo(this.x + this.length, this.y)
    const triHeight = (this.length / 2) * Math.tan(degToRad(60))
    this.ctx.lineTo(this.x + (this.length / 2), this.y + triHeight)
    this.ctx.fill()
  }
}

const makeBlocks = count => {
  let result = []
  let i = 0
  while (i++ < count) {
    const single = {
      x: Math.random() * 1200 - 600,
      y: Math.random() * 800 - 400,
      z: Math.random() * DISTANCE,
      color: [random(0,255), random(0,255), random(0,255)],
      shapeName: ['square', 'circle', 'triangle'][random(0,3)],
      random: random(3,8) / 5
    }
    result.push(single)
  }
  return result
}

const moveBlocks = (blocks, distance) => {
  blocks.forEach(block => {
    block.z -= distance
    while (block.z <= 1) {
      block.z += DISTANCE
    }
  })
}

const paintBlock = (canvas, x, y, a, rgbArr, name, random) => {
  const color = `rgba(${rgbArr[0]},${rgbArr[1]},${rgbArr[2]},${a})`
  const args = [canvas.ctx, x, y, LENGTH * random, color]

  const shape = name === 'square' ? new Square(...args) : name === 'circle' ? new Circle(...args) : new Triangle(...args)
  shape.draw()
}

const paintBackground = (ctx, w, h) => {
  ctx.fillStyle = "block"
  ctx.fillRect(0, 0, w, h)
}

export {
  Square,
  Circle,
  Triangle,
  makeBlocks,
  moveBlocks,
  paintBlock,
  paintBackground
}
