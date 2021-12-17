import { useState } from 'react'
import './App.css'
import Canvas from './Canvas';
import { Coordinate } from './interfaces';
import { PathShape, Shape } from './shapes'

function App() {
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
