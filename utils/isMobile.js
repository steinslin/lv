export function isMobile (str) {
  return /^(13[0-9]|14[579]|15[0-3,5-9]|17[0135678]|18[0-9])([0-9]){8}$/.test(str)
}
