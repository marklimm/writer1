

//  works with import * as stuff from './util/js-overrides'
//  works with import { defineCustomFunctions } from './util/js-overrides'
export const defineCustomFunctions = () => {
    Array.prototype.max = function() {
        return Math.max.apply(null, this);
    };
}

//  ----------------------


//  below works with import stuff from './util/js-overrides' --> then stuff.defineCustomFunctions()
//const defineCustomFunctions = () => {
//    Array.prototype.max = function() {
//        return Math.max.apply(null, this);
//    };
//}
//
//export default {
//    defineCustomFunctions
//}
