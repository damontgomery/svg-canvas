import { PathShape } from './shapes'
import { rgba } from './utilities/color'

function Path(props: { shape: PathShape }) {
  const d = `M ${props.shape.coordinates
      .map(coordinate => `${coordinate.x} ${coordinate.y}`)
      .join(' L')
    }`

  return (
    <path
      className="path"
      d={d}
      stroke={rgba(props.shape.stroke)}
      fill="none"
    />
  )
}

export default Path
