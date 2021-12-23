import { useState, KeyboardEvent, cloneElement } from 'react'
import './App.css'
import Canvas from './Canvas';
import { Coordinate } from './shapes'
import { getRandomColor } from './color'
import SvgMarkup from './SvgMarkup';
import Path from './Path';

export default function App() {
  function getNewPath() {
    return (
      <Path
        stroke={getRandomColor()}
      />
    )
  }

  const [shapes, setShapes] = useState([getNewPath()])

  function addCoordinateToShape(coordinate: Coordinate) {
    // @todo create a new shape component without defaulting to Path.
    const shape = shapes[shapes.length - 1] ?? getNewPath()

    const newShape = cloneElement(shape, {
      coordinates: [...shape.props.coordinates ?? [], coordinate]
    })
    
    setShapes([...shapes.slice(0, -1), newShape])
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
    setShapes([getNewPath()])
  }

  function newLine() {
    setShapes([...shapes, getNewPath()])
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
