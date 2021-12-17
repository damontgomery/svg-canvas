import { Color, Coordinate } from './interfaces'

export class Shape {
  stroke?: Color = { red: 0, green: 0, blue: 0, opacity: 1 }
  fill?: Color
  coordinates: Coordinate[] = []
}

export class PathShape extends Shape {
}