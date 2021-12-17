import { PathShape } from './shapes'
import { rgba } from './utilities/color'

// See https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths for a guide on what `path` should look like.

function Path(props: { shape: PathShape }) {
  const d = props.shape.coordinates.length > 0
    ? `M ${props.shape.coordinates
      .map(coordinate => `${coordinate.x} ${coordinate.y}`)
      .join(' L ')
    }`
    : 'M 0 0'

  return (
    <path
      className="path"
      d={d}
      stroke={rgba(props.shape.stroke)}
      fill={rgba(props.shape.fill)}
    />
  )
}

export default Path
