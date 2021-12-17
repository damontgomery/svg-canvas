// @todo Split these into their own files?

export interface Color {
  red: number,
  green: number,
  blue: number,
  opacity: number,
}

export interface Coordinate {
  x: number,
  y: number,
}

export class Shape {
  stroke: Color | undefined
  fill: Color | undefined
  coordinates: Coordinate[] = []
}

// export interface ShapeData {
//   stroke?: Color,
//   fill?: Color,
//   coordinates: Coordinate[],
// }

export class PathShape extends Shape {
}
