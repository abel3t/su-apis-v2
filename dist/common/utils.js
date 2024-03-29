"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toObjectId = exports.unixTime = void 0;
const date_fns_1 = require("date-fns");
const mongodb_1 = require("mongodb");
const unixTime = () => (0, date_fns_1.getUnixTime)(new Date());
exports.unixTime = unixTime;
const toObjectId = (value) => (0, mongodb_1.ObjectID)(value);
exports.toObjectId = toObjectId;
//# sourceMappingURL=utils.js.map