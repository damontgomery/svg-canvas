import './SvgMarkup.css'
import { renderToString } from 'react-dom/server'
import { ReactElement } from 'react'

export default function SvgMarkup(props: { shapes: ReactElement[], }) {
  const markup = renderToString(
      <svg
        version="1.1"
        width="100%" height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.shapes}
      </svg>
  )

  return (
    <code className="SvgMarkup">
      {markup}
    </code>
  )
}
