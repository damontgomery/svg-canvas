import { useState, useRef, MouseEvent } from 'react'
import './Canvas.css'
import { PathShape, Shape, ShapeName, shapesToComponents } from './shapes'

function Canvas() {
  const canvasRef = useRef<HTMLDivElement>(null)

  const defaultShape = new PathShape;
  // Random color for fun.

  function randomColor() {
    return Math.round(Math.random() * 255)
  }

  defaultShape.stroke = {
    red: randomColor(),
    green: randomColor(),
    blue: randomColor(),
    opacity: 1,
  }

  const [shapes, setShapes] = useState([defaultShape])

  function handleClick(event: MouseEvent) {
    let newShapes = Array.from(shapes)

    const shapeIndex = newShapes.length - 1
    const shape = newShapes[shapeIndex] ?? new Shape

    shape.coordinates.push({
      x: event.pageX - (canvasRef.current?.offsetLeft ?? 0),
      y: event.pageY - (canvasRef.current?.offsetTop ?? 0),
    })

    newShapes[shapeIndex] = shape
    setShapes(newShapes)
  }

  const shapeComponents = shapes.map((shape, index) => {
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
      className="canvas"
      onClick={handleClick}
    >
      <svg
        version="1.1"
        width="100" height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {shapeComponents}
      </svg>

      {/* @todo add SVG markup as printout. */}
    </div>
  )
}

export default Canvas
