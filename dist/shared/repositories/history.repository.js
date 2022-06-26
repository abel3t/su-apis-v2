"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryRepository = void 0;
const common_1 = require("@nestjs/common");
const EntityRepository_1 = require("typeorm/decorator/EntityRepository");
const history_entity_1 = require("../entities/history.entity");
const base_repository_1 = require("./base.repository");
let HistoryRepository = class HistoryRepository extends base_repository_1.BaseRepository {
};
HistoryRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, EntityRepository_1.EntityRepository)(history_entity_1.History)
], HistoryRepository);
exports.HistoryRepository = HistoryRepository;
//# sourceMappingURL=history.repository.js.map