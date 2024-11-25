import typescript from '@rollup/plugin-typescript'
import css from 'rollup-plugin-import-css'

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/index.js',
    format: 'es',
    sourcemap: true,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  plugins: [css({ output: 'styles.css' }), typescript()],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
}
