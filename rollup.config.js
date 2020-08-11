/* imports */
import { terser } from "rollup-plugin-terser";
import { dependencies } from "./package.json";

/* build config */
export default {
    input: "src/index.js",
    output: [
        { file: "dist/plugin.esm.js", format: "esm" },
        { file: "dist/plugin.cjs.js", format: "cjs", exports: "default" },
    ],
    plugins: [
        terser({
            output: {
                preamble: "/* Copyright (c) 2020 Outwalk Studios */"
            }
        })
    ],
    external: Object.keys(dependencies)
}