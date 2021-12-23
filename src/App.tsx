import { useState, KeyboardEvent, cloneElement, ReactElement } from 'react'
import './App.css'
import Canvas from './Canvas';
import { Coordinate } from './shapes'
import { getRandomColor } from './color'
import SvgMarkup from './SvgMarkup';
import Path from './Path';

export default function App() {
  const [shapes, setShapes] = useState([] as ReactElement[])

  const [selectedShape, setSelectedShape] = useState((<Path />))

  function getNewShape() {
    return cloneElement(selectedShape, {
      key: `shape-${shapes.length}`,
      stroke: getRandomColor(),
    })
  }

  if (shapes.length === 0) {
    setShapes([getNewShape()])
  }

  function addCoordinateToShape(coordinate: Coordinate) {
    // @todo create a new shape component without defaulting to Path.
    const shape = shapes[shapes.length - 1] ?? getNewShape()

    const newShape = cloneElement(shape, {
      coordinates: [...shape.props.coordinates ?? [], coordinate]
    })
    
    setShapes([...shapes.slice(0, -1), newShape])
  }

  function handleKeyDown(event: KeyboardEvent) {
    // @todo add ability to change shape type.
    
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
    setShapes([])
  }

  function newLine() {
    setShapes([...shapes, getNewShape()])
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
