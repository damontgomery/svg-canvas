import { Color, Coordinate } from './interfaces'
import Path from './Path'

export const shapeNames = ['PathShape'] as const
export type ShapeName = typeof shapeNames[number]

export type ShapeComponent = (props: { shape: Shape }) => JSX.Element

export class Shape {
  stroke?: Color = { red: 0, green: 0, blue: 0, opacity: 1 }
  fill?: Color
  coordinates: Coordinate[] = []
}

export class PathShape extends Shape {
}

export const shapesToComponents: Map<ShapeName, ShapeComponent> = new Map([
  ['PathShape', Path],
])
