/* imports */
import esbuild from "rollup-plugin-esbuild";
import { dependencies } from "./package.json";

/* build config */
export default {
    input: "src/index.js",
    output: [
        { file: "dist/plugin.mjs", format: "esm" },
        { file: "dist/plugin.js", format: "cjs", exports: "default" },
    ],
    plugins: [
        esbuild({ target: "es2015", minify: true })
    ],
    external: Object.keys(dependencies)
};
