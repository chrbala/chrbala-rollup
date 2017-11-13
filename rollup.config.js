// @flow

import config from './src/index.js';
export default Object.assign({}, config, {
	external: ['rollup-plugin-babel', 'rollup-plugin-commonjs'],
});
