/**
 * 驼峰转下划线
 */
export function camelToUnderline (str) {
  if (!str) {
    return str
  }
  str = str.charAt(0).toLowerCase() + str.slice(1)
  return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}
