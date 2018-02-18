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
				require.resolve('babel-preset-react'),
				[
					require.resolve('babel-preset-env'),
					{
						modules: false,
					},
				],
				require.resolve('babel-preset-stage-2'),
			],
			plugins: [
				require.resolve('babel-plugin-transform-flow-strip-types'),
				require.resolve('babel-plugin-transform-class-properties'),
				require.resolve('babel-plugin-external-helpers'),
			],
			babelrc: false,
		}),
		commonjs(),
	],
};
