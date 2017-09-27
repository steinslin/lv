export function isEmail (str) {
  return /^[0-9a-zA-Z_]+((\.)*[0-9a-zA-Z_]+)*@[0-9a-zA-Z_]+(\.[0-9a-zA-Z_]+)+$/.test(str)
}
