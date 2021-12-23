import { getRgba } from './color'
import { Shape } from './shapes'

// See https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths for a guide on what `path` should look like.
export default function Path({
  coordinates = [],
  stroke = { red: 0, green: 0, blue: 0, opacity: 1 },
  fill,
  ...rest
}: Shape) {

  const d = coordinates.length > 0
    ? `M ${coordinates
      .map(coordinate => `${coordinate.x} ${coordinate.y}`)
      .join(' L ')
    }`
    : 'M 0 0'

  return (
    <path
      {...rest}
      className="Path"
      d={d}
      stroke={getRgba(stroke)}
      fill={getRgba(fill)}
    />
  )
}
