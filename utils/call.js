export const call = (key, ...args) => context => context[ key ](...args)

/*
 * Promise.resolve( [ 1, 2, 3 ] ).then( call('map', x => 2 * x ) ).then( console.log ) //[ 2, 4, 6 ]
 * const map = call.bind(null, 'map')
 * Promise.resolve( [ 1, 2, 3 ] ).then( map( x => 2 * x ) ).then( console.log ) //[ 2, 4, 6 ]
 */

/*
 * call('map', x => 2 * x ) // context => context[ key ]( ...args )
 * .then(context => context[ key ]( ...args )) // 在这里context为[1,2,3], key是‘map’, ...args为 x => x * 2函数
 */

/*
 * const map = call.bind(null, 'map') // 指定'key'为'map'
 * .then(map( x => 2 * x )) // 指定...args为上述函数 然后再返回 context => context[ key ]( ...args )
 */
