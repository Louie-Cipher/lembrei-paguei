module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'react-native-reanimated/plugin',
			[
				'module-resolver',
				{
					alias: {
						'@': './src',
						'@assets': './src/assets',
						'@routes': './src/routes',
						'@screens': './src/screens',
						'@components': './src/components',
					},
				},
			],
		],
	};
};
