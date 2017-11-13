// @flow

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'src/index.js',
	sourcemap: 'inline',
	output: {
		file: 'build/index.js',
		format: 'cjs',
	},
	plugins: [
		babel({
			exclude: 'node_modules/**',
			presets: [
				'react',
				[
					'env',
					{
						modules: false,
					},
				],
				'stage-2',
			],
			plugins: [
				'transform-flow-strip-types',
				'babel-plugin-transform-class-properties',
				'external-helpers',
			],
			babelrc: false,
		}),
		commonjs(),
	],
};
