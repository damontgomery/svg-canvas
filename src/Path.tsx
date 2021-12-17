import { PathShape } from './types/interfaces'
import { rgba } from './utilities/color'

function Path(props: {shape: Path}) {
  const d = `M ${
    props.shape.coordinates
      .map(coordinate => `${coordinate.x} ${coordinate.y}`)
      .join(' L')
  }`

  return (
    <path
      className="Path"
      d={d}
      stroke={rgba(props.shape.stroke)}
      fill="none"
    />
  )
}

export default Path
