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

export function getRandomColorValue() {
  return Math.round(Math.random() * 255)
}

export function getRandomColor(): Color {
  return {
    red: getRandomColorValue(),
    green: getRandomColorValue(),
    blue: getRandomColorValue(),
    opacity: 1,
  }
}
