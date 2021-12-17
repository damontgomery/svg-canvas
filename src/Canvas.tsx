import { useState, MouseEvent } from 'react'
import './Canvas.css'
import Path from './Path'
import { Shape } from './shapes'

function Canvas() {
  // @todo make this an array of shapes
  const [shape, setShape] = useState({
    coordinates: [
      {x: 100, y: 100},
      {x: 200, y: 500},
    ]
  } as Shape)

  // @todo fix TS.
  function handleClick(event: MouseEvent) {
    console.log(event)

    // @todo offset by position of canvas.

    let newShape = {
      ...shape,
    }
    
    newShape.coordinates.push({
      x: event.pageX,
      y: event.pageY
    })

    console.log(shape, newShape)

    setShape(newShape)
  }

  return (
    <div
      className="Canvas"
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
    </div>
  )
}

export default Canvas
