
export default (string) => {
  let output = ''
  const upper = string.toUpperCase()

  for (let i = 0; i < string.length; i++) {
    if (i > 0 && string[i] === upper[i]) {
      output += '-'
    }

    output += string[i].toLowerCase()
  }

  return output
}
