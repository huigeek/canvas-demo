import { int, float, ShapeOptions } from './types'
import { Canvas } from './canvas'

const DISTANCE = 1000
const LENGTH = 6

const degToRad = (degress: float): float => degress * Math.PI / 100

const random = (min: int, max: int): int => Math.floor((max - min) * Math.random()) + min

class Shape {
  ctx: CanvasRenderingContext2D
  x: number
  y: number
  length: number
  color: string
  constructor(...args) {
    [this.ctx, this.x, this.y, this.length, this.color] = args
  }
}

class Square extends Shape {
  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.length, this.length)
  }
}

class Circle extends Shape{
  radius: number
  constructor(...args) {
    super(...args)
    this.radius = this.length / 2
  }
  draw() {
    this.ctx.fillStyle = this.color

    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, degToRad(0), degToRad(360), false)
    this.ctx.fill()
  }
}

class Triangle extends Shape{
  draw () {
    this.ctx.fillStyle = this.color
    
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.lineTo(this.x + this.length, this.y)
    const triHeight = (this.length / 2) * Math.tan(degToRad(30))
    this.ctx.lineTo(this.x + (this.length / 2), this.y - triHeight)
    this.ctx.fill()
  }
}

const makeBlocks = (count: number): ShapeOptions[] => {
  let result = []
  let i = 0
  while (i++ < count) {
    const single: ShapeOptions = {
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

const moveBlocks = (blocks: ShapeOptions[], distance: number) => {
  blocks.forEach(block => {
    block.z -= distance
    while (block.z <= 1) {
      block.z += DISTANCE
    }
  })
}

const paintBlock = (canvas: Canvas, x: number, y: number, a: number, rgbArr: string | number[], name: string, random: number) => {
  const color = `rgba(${rgbArr[0]},${rgbArr[1]},${rgbArr[2]},${a})`
  const args = [canvas.ctx, x, y, LENGTH * random, color]

  const shape = name === 'square' ? new Square(...args) : name === 'circle' ? new Circle(...args) : new Triangle(...args)
  shape.draw()
}

const paintBackground = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
  ctx.fillStyle = "black"
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
