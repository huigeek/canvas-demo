const generateId = () =>  Math.random().toString(36).slice(-6)

class Canvas {
  private id: string
  private parent: Element
  
  public width: number
  public height: number
  public ctx: CanvasRenderingContext2D

  constructor (parent: Element, width: number, height: number) {
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
