import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
	input: "src/index.ts",
	output: [
		{
			file: "dist/index.js",
			format: "esm",
			sourcemap: false,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		typescript({ tsconfig: "./tsconfig.json" }),
	],
	external: ["react", "react-dom"],
};
