import { minifyHTMLLiterals as MinifyFunction, Options as MinifyOptions } from "minify-literals";
import { TransformHook } from "rollup";

declare interface Options {
    include? : string | string[];
    exclude? : string | string[];
    options? : Partial<MinifyOptions>;
    failOnError? : boolean;
    minifyHTMLLiterals? : typeof MinifyFunction;
    filter?: (id: string) => boolean;
}

export default function (options?: Options) : {
    name: string;
    transform: TransformHook;
};