const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

module.exports = {
	globals: {
		"ts-jest": {
			tsConfig: "tsconfig.json"
		}
	},

	transform: {
		"^.+\\.tsx?$": "ts-jest",
		"\\.html$": "<rootDir>/test/transform/html.js"
	},

	moduleFileExtensions: ["js", "ts"],

	testMatch: ["**/test/**/*.test.(ts|js)"],
	testEnvironment: "node",
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/src/" })
};
