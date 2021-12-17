import { useState, useRef, MouseEvent } from 'react'
import './Canvas.css'
import Path from './Path'
import { PathShape, Shape } from './shapes'

function Canvas() {
  const canvasRef = useRef<HTMLDivElement>(null)

  // @todo make this an array of shapes
  const [shapes, setShapes] = useState([new PathShape])

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
        {
          shapes.map((shape, index) => (
            <Path key={`shape-${index}`} shape={shape} />
          ))
        }
      </svg>

      {/* @todo add SVG markup as printout. */}
    </div>
  )
}

export default Canvas
