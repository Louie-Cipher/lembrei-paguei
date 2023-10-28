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
						'db': './src/db',
						'utils': './src/utils',
						'assets': './src/assets',
						'routes': './src/routes',
						'screens': './src/screens',
						'components': './src/components',
						'entriesScreen': './src/screens/main/entries',
						'addEntriesScreen': './src/screens/main/addEntries',
						'groupsScreen': './src/screens/main/groups'
					},
				},
			],
		],
	};
};
