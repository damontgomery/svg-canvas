import { getRgba } from './color'
import { Shape } from './shapes'

// See https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes#polygon for a guide on what `polygon` should look like.

export default function Polygon({
  coordinates = [],
  stroke = { red: 0, green: 0, blue: 0, opacity: 1 },
  fill = stroke,
}: Shape) {

  const points = coordinates.length > 0
    ? `${coordinates
      .map(coordinate => `${coordinate.x},${coordinate.y}`)
      .join(' ')
    }`
    : '0 0'

  return (
    <polygon
      className="Polygon"
      points={points}
      stroke={getRgba(stroke)}
      fill={getRgba(fill)}
    />
  )
}
