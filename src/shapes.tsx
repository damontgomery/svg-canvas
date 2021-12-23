import { Color } from './color'

export interface Coordinate {
  x: number,
  y: number,
}

// @todo, make this a component?
export interface Shape {
  stroke?: Color,
  fill?: Color,
  coordinates?: Coordinate[],
}
