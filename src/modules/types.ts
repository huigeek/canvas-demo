export type int = number
export type float = number

export interface paramsObj {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  length: number;
  color: string;
}

export interface ShapeOptions {
  x: number,
  y: number,
  z: number,
  color: number[] | string,
  shapeName: string,
  random: number
}
