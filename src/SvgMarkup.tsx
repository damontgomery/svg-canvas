import './SvgMarkup.css'
import {getComponentsFromShapes, Shape } from './shapes'
import { renderToString } from 'react-dom/server'

function SvgMarkup(props: { shapes: Shape[] }) {
  const shapeComponents = getComponentsFromShapes(props.shapes)

  const markup = renderToString(
      <svg
        version="1.1"
        width="100%" height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {shapeComponents}
      </svg>
  )

  return (
    <code className="SvgMarkup">
      {markup}
    </code>
  )
}

export default SvgMarkup
