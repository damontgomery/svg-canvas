import { useState, KeyboardEvent } from 'react'
import './App.css'
import Canvas from './Canvas';
import { Shape, Coordinate, PathShape } from './shapes'
import { getRandomColor } from './color'
import SvgMarkup from './SvgMarkup';

function App() {
  function getNewPathShape() {
    const shape = new PathShape;

    shape.stroke = {
      red: getRandomColor(),
      green: getRandomColor(),
      blue: getRandomColor(),
      opacity: 1,
    }

    return shape
  }

  const [shapes, setShapes] = useState([getNewPathShape()])

  function addCoordinateToShape(coordinate: Coordinate) {
    let newShapes = Array.from(shapes)

    const shapeIndex = newShapes.length - 1
    const shape = newShapes[shapeIndex] ?? new Shape

    shape.coordinates.push(coordinate)

    newShapes[shapeIndex] = shape

    setShapes(newShapes)
  }

  function handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'r':
        reset()
        break;
      case 'l':
        newLine()
        break;
    }
  }

  function reset() {
    setShapes([getNewPathShape()])
  }

  function newLine() {
    let newShapes = Array.from(shapes)

    newShapes.push(getNewPathShape())

    setShapes(newShapes)
  }

  return (
    <div
      className="App"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Canvas
        shapes={shapes}
        addCoordinateToShape={addCoordinateToShape}
      />
      <div className="Help">
        <p>Click to draw. 'R' to reset. 'L' to start a new line.</p>
      </div>
      <SvgMarkup
        shapes={shapes}
      />
    </div>
  )
}

export default App
