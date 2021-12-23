import { useState, KeyboardEvent, cloneElement, ReactElement } from 'react'
import './App.css'
import Canvas from './Canvas';
import { Coordinate } from './shapes'
import { getRandomColor } from './color'
import SvgMarkup from './SvgMarkup';
import Path from './Path';
import Polygon from './Polygon';

export default function App() {
  const [shapes, setShapes] = useState([] as ReactElement[])

  const [selectedShape, setSelectedShape] = useState((<Path />))

  // We want to accept a shape as a variable in case we are in the middle up updating the component state and we don't have an updated selectedShape.
  function getNewShape(shape = selectedShape) {
    return cloneElement(shape, {
      key: `shape-${shapes.length}`,
      stroke: getRandomColor(),
    })
  }

  function startNewShape(shape = selectedShape) {
    setSelectedShape(shape)

    setShapes([...shapes, getNewShape(shape)])
  }

  if (shapes.length === 0) {
    startNewShape()
  }

  function addCoordinateToShape(coordinate: Coordinate) {
    const shape = shapes[shapes.length - 1] ?? getNewShape()

    setShapes([
      ...shapes.slice(0, -1),
      cloneElement(shape, {
        coordinates: [...shape.props.coordinates ?? [], coordinate]
      })
    ])
  }

  // @todo split this out?
  function handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'r':
        setShapes([])
        break;
      case 'l':
        startNewShape((<Path />))
        break;
      case 'p':
        startNewShape((<Polygon />))
        break;
    }
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
        <p>Click to draw. 'R' to reset. 'L' to start a new line. 'P' to start a new polygon.</p>
      </div>
      <SvgMarkup
        shapes={shapes}
      />
    </div>
  )
}
