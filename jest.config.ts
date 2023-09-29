/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
	// Automatically clear mock calls, instances, contexts and results before every test
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,

	// The directory where Jest should output its coverage files
	coverageDirectory: "coverage",

	// Module file extensions for importing
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

	// The root of your source code, typically /src
	// `<rootDir>` is a token Jest substitutes
	roots: ["<rootDir>/src"],

	setupFilesAfterEnv: [
		"@testing-library/react/cleanup-after-each",
		"@testing-library/jest-dom/extend-expect",
	],

	// The test environment that will be used for testing
	testEnvironment: "jsdom",

	// Jest transformations -- this adds support for TypeScript
	// using ts-jest
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
};

export default config;
