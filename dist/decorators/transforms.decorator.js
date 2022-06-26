"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToArray = exports.ToInt = exports.Trim = void 0;
const class_transformer_1 = require("class-transformer");
const lodash_1 = require("lodash");
function Trim() {
    return (0, class_transformer_1.Transform)((params) => {
        const value = params.value;
        if (Array.isArray(value)) {
            return value.map((v) => (0, lodash_1.trim)(v).replace(/\s\s+/g, ' '));
        }
        return (0, lodash_1.trim)(value).replace(/\s\s+/g, ' ');
    });
}
exports.Trim = Trim;
function ToInt() {
    return (0, class_transformer_1.Transform)((params) => {
        const value = params.value;
        return Number.parseInt(value, 10);
    }, { toClassOnly: true });
}
exports.ToInt = ToInt;
function ToArray() {
    return (0, class_transformer_1.Transform)((params) => {
        const value = params.value;
        if ((0, lodash_1.isNil)(value)) {
            return [];
        }
        return (0, lodash_1.castArray)(value);
    }, { toClassOnly: true });
}
exports.ToArray = ToArray;
//# sourceMappingURL=transforms.decorator.js.map