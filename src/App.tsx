import { useState } from 'react'
import './App.css'
import Canvas from './Canvas';
import { Shape, Coordinate, PathShape } from './shapes'
import { getRandomColor } from './color'

function App() {
  const defaultShape = new PathShape;

  defaultShape.stroke = {
    red: getRandomColor(),
    green: getRandomColor(),
    blue: getRandomColor(),
    opacity: 1,
  }

  const [shapes, setShapes] = useState([defaultShape])

  function addCoordinateToShape(coordinate: Coordinate) {
    let newShapes = Array.from(shapes)

    const shapeIndex = newShapes.length - 1
    const shape = newShapes[shapeIndex] ?? new Shape

    shape.coordinates.push(coordinate)

    newShapes[shapeIndex] = shape

    setShapes(newShapes)
  }

  return (
    <div className="App">
      <Canvas
        shapes={shapes}
        addCoordinateToShape={addCoordinateToShape}
      />
      {/* @todo add SVG markup as printout. */}
    </div>
  )
}

export default App
