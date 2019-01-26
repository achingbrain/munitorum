
const DEFAULT = 16

export const spacing = (level, unit = 'px') => {
  return `${level * DEFAULT}${unit}`
}
