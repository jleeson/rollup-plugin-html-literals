import { minifyHTMLLiterals } from "minify-literals";
import { createFilter } from "@rollup/pluginutils";

export default (options = {}) => {

    if(!options.minifyHTMLLiterals) {
        options.minifyHTMLLiterals = minifyHTMLLiterals;
    }

    if(!options.filter) {
        options.filter = createFilter(options.include, options.exclude);
    }

    const minifyOptions = options.options || {};

    return {
        name: "html-literals",

        transform(code, id) {
            if(!options.filter(id)) return null;

            try {
                return options.minifyHTMLLiterals(code, { ...minifyOptions, fileName: id });
            } catch (error) {
                if(options.failOnError) {
                    this.error(error.message);
                } else {
                    this.warn(error.message);
                }
            }
        }
    };
};