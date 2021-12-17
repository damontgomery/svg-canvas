import { useState, useRef, MouseEvent } from 'react'
import './Canvas.css'
import Path from './Path'
import { PathShape, Shape } from './shapes'

function Canvas() {
  const canvasRef = useRef<HTMLDivElement>(null)

  // @todo make this an array of shapes
  const [shape, setShape] = useState(new PathShape)

  function handleClick(event: MouseEvent) {
    let newShape = {
      ...shape,
    }

    newShape.coordinates.push({
      x: event.pageX - (canvasRef.current?.offsetLeft ?? 0),
      y: event.pageY - (canvasRef.current?.offsetTop ?? 0),
    })

    setShape(newShape)
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
        <Path
          shape={shape}
        />
      </svg>

      {/* @todo add SVG markup as printout. */}
    </div>
  )
}

export default Canvas
