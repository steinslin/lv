/*
**  使用递归，对一个函数进行curry，第2个参数可以设置等待的参数个数，默认为传递的函数参数个数
*/

// export const curry = (f, arity = f.length) => {
//   return (...args) =>
//     args.length >= arity ? f(...args) : (...nextArgs) => curry(f, arity)(...args, ...nextArgs)
// }

/*
**  更精炼
*/
export const curry = (f, arity = f.length, ...args) =>
  args.length >= arity ? f(...args) : curry.bind(null, f, arity, ...args)
