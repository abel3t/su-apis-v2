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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = exports.CreateVoteDto = exports.CriteriaType = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const app_service_1 = require("./app.service");
exports.CriteriaType = {
    GoodStudy: 'GoodStudy',
    PlayHard: 'PlayHard',
    EatWellSleepWell: 'EatWellSleepWell',
    Skillfully: 'Skillfully',
    Humorous: 'Humorous',
    NiceWords: 'NiceWords',
    GoodDiscipline: 'GoodDiscipline',
    Serve: 'Serve',
    BeautifulSingOrDancing: 'BeautifulSingOrDancing',
    Sociable: 'Sociable'
};
class CreateVoteDto {
}
__decorate([
    (0, swagger_2.ApiProperty)({
        example: 'Laptop HP',
        description: 'The name of category'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(Object.values(exports.CriteriaType)),
    __metadata("design:type", String)
], CreateVoteDto.prototype, "type", void 0);
exports.CreateVoteDto = CreateVoteDto;
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getRoot() {
        return { status: 'OK' };
    }
    voteStudent({ type }, classroomId, studentId) {
        return this.appService.voteStudent({ type, classroomId, studentId });
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Root'
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getRoot", null);
__decorate([
    (0, common_1.Post)('api/classrooms/:classroomId/students/:studentId/vote'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Vote'
    }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('classroomId')),
    __param(2, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateVoteDto, String, String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "voteStudent", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)('Root'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map