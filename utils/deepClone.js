export function deepClone (obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  const result = Array.isArray(obj) ? [] : {}
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      result[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  } else if (typeof obj === 'object') {
    Object.keys(obj).forEach(k => {
      result[k] = typeof obj[k] === 'object' ? deepClone(obj[k]) : obj[k]
    })
  }
  return result
}
