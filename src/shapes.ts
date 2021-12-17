import { Color, Coordinate } from './interfaces'

export class Shape {
  stroke: Color | undefined
  fill: Color | undefined
  coordinates: Coordinate[] = []
}

export class PathShape extends Shape {
}