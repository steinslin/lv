import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  input: 'index.js',
  output: [{
    file: 'lib/index.esm.js',
    format: 'es'
  }, {
    file: 'lib/index.common.js',
    format: 'cjs'
  }],
  plugins: [resolve(), commonjs(), babel({
    presets: [['env', {
      'modules': false
    }], 'stage-2'],
    runtimeHelpers: true
  })]
}
