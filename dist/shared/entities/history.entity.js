"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
const openapi = require("@nestjs/swagger");
const date_fns_1 = require("date-fns");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let History = class History extends base_entity_1.BaseEntity {
    constructor(props) {
        const _a = props || {}, { type, classroomId, studentId } = _a, superItem = __rest(_a, ["type", "classroomId", "studentId"]);
        super(superItem);
        Object.assign(this, { type, classroomId, studentId });
    }
    init() {
        this.isActive = true;
        this.createdAt = (0, date_fns_1.getUnixTime)(new Date());
    }
    update() {
        this.updatedAt = (0, date_fns_1.getUnixTime)(new Date());
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { classroomId: { required: true, type: () => String }, studentId: { required: true, type: () => String }, type: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', width: 128 }),
    __metadata("design:type", String)
], History.prototype, "classroomId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', width: 128 }),
    __metadata("design:type", String)
], History.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', width: 32 }),
    __metadata("design:type", String)
], History.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], History.prototype, "init", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], History.prototype, "update", null);
History = __decorate([
    (0, typeorm_1.Entity)('History'),
    __metadata("design:paramtypes", [Object])
], History);
exports.History = History;
//# sourceMappingURL=history.entity.js.map