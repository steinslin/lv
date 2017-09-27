/**
 * 下划线转驼峰
 */
export function underlineToCamel (str) {
  if (!str) {
    return str
  }
  return str.replace(/_([a-z])/g, (all, letter) => {
    return letter.toUpperCase()
  })
}
