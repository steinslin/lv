export const digitize = n => [...'' + n].map(i => parseInt(i))

// digitize(2334) -> [2, 3, 3, 4]
