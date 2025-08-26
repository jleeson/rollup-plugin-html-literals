import minify from "minify-literals";
import { TransformHook } from "rollup";

declare interface Options {
    include? : string | string[];
    exclude? : string | string[];
    options? : Partial<minify.Options>;
    failOnError? : boolean;
    minifyHTMLLiterals? : typeof minify.minifyHTMLLiterals;
    filter?: (id: string) => boolean;
}

export default function (options?: Options) : {
    name: string;
    transform: TransformHook;
};