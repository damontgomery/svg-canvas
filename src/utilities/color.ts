import { Color } from "../interfaces"

export function rgba(color?: Color) {
  return color === undefined
    ? 'none'
    : `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.opacity})`
}
