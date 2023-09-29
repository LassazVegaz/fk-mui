import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";

import packageJson from "./package.json" assert { type: "json" };

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
				name: "react-lib",
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			external(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),
			terser(),
		],
	},
	{
		input: "dist/esm/types/index.d.ts",
		output: [{ file: packageJson.types, format: "esm" }],
		plugins: [dts()],
	},
];
