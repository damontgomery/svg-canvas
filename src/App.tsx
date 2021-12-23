import { useState, KeyboardEvent, cloneElement, ReactElement, ComponentType } from 'react'
import './App.css'
import Canvas from './Canvas';
import { Coordinate } from './shapes'
import { getRandomColor } from './color'
import SvgMarkup from './SvgMarkup';
import Path from './Path';
import Polygon from './Polygon';

export default function App() {
  const [shapes, setShapes] = useState([] as ComponentType<any>[])

  const withStrokeAlt = (color:any) => (
    <P extends {stroke:any}>(Component:ComponentType<P>) => (
      (props:P) => <Component {...props} stroke={color} />
    )
  ) 
  function withStroke(color:any) {
    function  hoc<P extends {stroke:any}>(Component:ComponentType<P>) {
      function WithStroke(props:P) {
        return <Component {...props} stroke={color} />
      }
      return WithStroke;
    }
    return hoc;
  }
  const withCoordinateAlt = (coordinate: Coordinate) => (
    <P extends { coordinates?:Coordinate[]}>(Component:ComponentType<P>) => (
      (props:P) => <Component {...props} coordinates={[coordinate, ...(props.coordinates || [])]} /> 
    )
  );
  function withCoordinate(coordinate: Coordinate) {
    function  hoc<P extends { coordinates?:Coordinate[]}>(Component:ComponentType<P>) {
      function WithCoordinate(props:P) {
        const {coordinates} = props;
        // We add our cooridates to the front as the intermost should be first.
        return <Component {...props} coordinates={[coordinate, ...(coordinates || [])]} />
      } 
      return WithCoordinate;
    }
    return hoc;
  }
  // We want to accept a shape as a variable in case we are in the middle up updating the component state and we don't have an updated selectedShape.
  function getNewShape(Shape = Path) {
    return withStroke(getRandomColor())(Shape)
  }

  function startNewShape(Shape = Path) {

    setShapes([...shapes, getNewShape(Shape)])
  }

  if (shapes.length === 0) {
    startNewShape()
  }



  function addCoordinateToShape(coordinate: Coordinate) {
    const Shape = shapes[shapes.length - 1] ?? getNewShape()

    setShapes([
      ...shapes.slice(0, -1),
      withCoordinate(coordinate)(Shape),
    ])
  }

  // @todo split this out?
  function handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'r':
        setShapes([])
        break;
      case 'l':
        startNewShape(Path)
        break;
      case 'p':
        startNewShape(Polygon)
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
