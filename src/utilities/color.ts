import { Color } from "../interfaces"

export function rgba(color?: Color) {
  const defaultColor = 'rgba(0,0,0,1)'

  return color === undefined ? defaultColor : `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.opacity})`
}
