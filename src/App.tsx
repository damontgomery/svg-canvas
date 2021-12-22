import { useState, KeyboardEvent } from 'react'
import './App.css'
import Canvas from './Canvas';
import { Shape, Coordinate, PathShape } from './shapes'
import { getRandomColor } from './color'
import SvgMarkup from './SvgMarkup';

function App() {
  function getNewPathShape() {
    const shape = new PathShape;

    shape.stroke = getRandomColor()

    return shape
  }

  const [shapes, setShapes] = useState([getNewPathShape()])

  function addCoordinateToShape(coordinate: Coordinate) {
    const shape = shapes[shapes.length - 1] ?? new Shape
    
    shape.coordinates.push(coordinate)
    
    setShapes([...shapes.slice(0, -1), shape])
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
    setShapes([...shapes, getNewPathShape()])
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
