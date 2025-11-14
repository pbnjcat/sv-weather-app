import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';
import postcssOKLabFunction from '@csstools/postcss-oklab-function';

export default {
  plugins: [
    postcssNested(),
    postcssOKLabFunction({ preserve: true }),
    autoprefixer()
  ]
}