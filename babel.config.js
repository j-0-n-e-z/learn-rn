/// <reference types="nativewind/types" />
module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: ['nativewind/babel']
	}
}
