const generateId = () => {
  return Math.random().toString(36).slice(-6)
}

class Canvas {
  constructor (parent, width, height) {
    this.id = `canvas-${generateId()}`
    this.parent = parent || document.body
    this.width = width || 800
    this.height = height || 600
    this.ctx = null
  }
  create () {
    if (this.ctx !== null) {
      console.log('Canvas has already created!')
      return
    }
    else {
      let canvasEl = document.createElement('canvas')
      canvasEl.id = this.id
      canvasEl.width = this.width
      canvasEl.height = this.height
      
      this.ctx = canvasEl.getContext('2d')

      this.parent.appendChild(canvasEl)
    }
  }
}

export { Canvas }
