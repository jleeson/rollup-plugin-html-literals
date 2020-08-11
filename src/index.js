import { minifyHTMLLiterals } from "minify-html-literals";
import { createFilter } from "@rollup/pluginutils";

export default (options = {}) => {

    if(!options.minifyHTMLLiterals) {
        options.minifyHTMLLiterals = minifyHTMLLiterals;
    }

    if(!options.filter) {
        options.filter = createFilter(options.include, options.exclude);
    }

    return {
        name: "html-literals",

        transform(code, id) {
            if(!options.filter(id)) return null;

            try {
                return options.minifyHTMLLiterals(code, { fileName: id });
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