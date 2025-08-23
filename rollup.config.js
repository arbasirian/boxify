import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const postcss = require("rollup-plugin-postcss");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
        exports: "named",
        compact: true,
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
        exports: "named",
        compact: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        preferBuiltins: true,
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      }),
      commonjs({
        include: "node_modules/**",
        transformMixedEsModules: true,
      }),
      postcss({
        modules: true,
        extract: "index.css",
        inject: false,
        minimize: true,
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationMap: true,
        sourceMap: true,
        removeComments: true,
      }),
    ],
    external: ["react", "react-dom"],
    treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false,
      unknownGlobalSideEffects: false,
      tryCatchDeoptimization: false,
    },
    onwarn(warning, warn) {
      // Ignore certain warnings
      if (warning.code === "CIRCULAR_DEPENDENCY") return;
      if (warning.code === "UNUSED_EXTERNAL_IMPORT") return;
      warn(warning);
    },
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
