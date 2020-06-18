import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/Example.tsx",
  output: [
    {
      dir: "dist",
      format: "cjs",
      sourcemap: true,
    },
    {
      dir: "dist",
      format: "esm",
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: "node_modules/**",
      // left-hand side can be an absolute path, a path
      // relative to the current directory, or the name
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(), // minifies generated bundles
  ],
};

/* import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";


export default {
  input: "src/index.ts", // our source file

  output: {
    dir: "dist",
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies),
  ],
  plugins: [
    typescript({
      tsconfigOverride: { noEmit: false },
      typescript: require("typescript"),
    }),
    terser(), // minifies generated bundles
  ],
}; */
