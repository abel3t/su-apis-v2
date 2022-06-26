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
exports.Classroom = void 0;
const openapi = require("@nestjs/swagger");
const date_fns_1 = require("date-fns");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let Classroom = class Classroom extends base_entity_1.BaseEntity {
    constructor(props) {
        const _a = props || {}, { name } = _a, superItem = __rest(_a, ["name"]);
        super(superItem);
        Object.assign(this, { name });
    }
    init() {
        this.isActive = true;
        this.createdAt = (0, date_fns_1.getUnixTime)(new Date());
    }
    update() {
        this.updatedAt = (0, date_fns_1.getUnixTime)(new Date());
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, order: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', width: 128 }),
    __metadata("design:type", String)
], Classroom.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Classroom.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Classroom.prototype, "init", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Classroom.prototype, "update", null);
Classroom = __decorate([
    (0, typeorm_1.Entity)('Classroom'),
    __metadata("design:paramtypes", [Object])
], Classroom);
exports.Classroom = Classroom;
//# sourceMappingURL=classroom.entity.js.map