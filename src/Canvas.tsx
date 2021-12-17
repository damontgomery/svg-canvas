import { useRef, MouseEvent } from 'react'
import './Canvas.css'
import { Coordinate } from './interfaces'
import {Shape, ShapeName, shapesToComponents } from './shapes'

function Canvas(props: {
  shapes: Shape[],
  addCoordinateToShape: (coordinate: Coordinate) => void,
}) {
  const canvasRef = useRef<HTMLDivElement>(null)

  function handleClick(event: MouseEvent) {
    props.addCoordinateToShape({
      x: event.pageX - (canvasRef.current?.offsetLeft ?? 0),
      y: event.pageY - (canvasRef.current?.offsetTop ?? 0),
    })
  }

  const shapeComponents = props.shapes.map((shape, index) => {
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

  return (
    <div
      ref={canvasRef}
      className="Canvas"
      onClick={handleClick}
    >
      <svg
        version="1.1"
        width="100" height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {shapeComponents}
      </svg>
    </div>
  )
}

export default Canvas
