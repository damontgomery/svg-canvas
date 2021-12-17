import { Color } from './color'
import Path from './Path'

// @todo reorder these things at some point.

export interface Coordinate {
  x: number,
  y: number,
}

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

export function getComponentsFromShapes(shapes: Shape[]){
  return shapes.map((shape, index) => {
    const shapeName = (shape.constructor.name as ShapeName)
  
    const ShapeComponent = shapesToComponents.get(shapeName);
  
    return ShapeComponent !== undefined
      ? (
        <ShapeComponent
          key={`shape-${index}`}
          shape={shape}
        />
      )
      : null
  })
}
