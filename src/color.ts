export interface Color {
  red: number,
  green: number,
  blue: number,
  opacity: number,
}

export function getRgba(color?: Color) {
  return color === undefined
    ? 'none'
    : `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.opacity})`
}

export function getRandomColor() {
  return Math.round(Math.random() * 255)
}
