import { useRef, MouseEvent } from 'react'
import './Canvas.css'
import { Shape, getComponentsFromShapes, Coordinate } from './shapes'

function Canvas(props: {
  shapes: Shape[],
  addCoordinateToShape: (coordinate: Coordinate) => void,
}) {
  const canvasRef = useRef<HTMLDivElement>(null)

  function handleClick(event: MouseEvent) {
    props.addCoordinateToShape({
      x: event.pageX - (canvasRef.current?.offsetLeft ?? 0),
      y: event.pageY - (canvasRef.current?.offsetTop ?? 0),
    })
  }

  const shapeComponents = getComponentsFromShapes(props.shapes)

  return (
    <div
      ref={canvasRef}
      className="Canvas"
      onClick={handleClick}
    >
      <svg
        version="1.1"
        width="100" height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {shapeComponents}
      </svg>
    </div>
  )
}

export default Canvas
