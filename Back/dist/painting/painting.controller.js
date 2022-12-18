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
exports.PaintingController = void 0;
const common_1 = require("@nestjs/common");
const painting_service_1 = require("./painting.service");
let PaintingController = class PaintingController {
    constructor(paintingService) {
        this.paintingService = paintingService;
    }
    getPaintings() {
        return this.paintingService.getPaintings();
    }
    getArtist() {
        return this.paintingService.getArtist();
    }
    getInstallation() {
        return this.paintingService.getInstallation();
    }
    getPainting(res, id) {
        return res.send(this.paintingService.getPainting(id));
    }
    create(res, body) {
        return res.send(this.paintingService.create(body));
    }
    update(res, id, body) {
        return res.send(this.paintingService.update(id, body));
    }
    delete(res, id) {
        return res.send(this.paintingService.delete(id));
    }
};
__decorate([
    (0, common_1.Get)('painting'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaintingController.prototype, "getPaintings", null);
__decorate([
    (0, common_1.Get)('artist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaintingController.prototype, "getArtist", null);
__decorate([
    (0, common_1.Get)('installation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaintingController.prototype, "getInstallation", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PaintingController.prototype, "getPainting", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaintingController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", Promise)
], PaintingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], PaintingController.prototype, "delete", null);
PaintingController = __decorate([
    (0, common_1.Controller)('painting'),
    __metadata("design:paramtypes", [painting_service_1.PaintingService])
], PaintingController);
exports.PaintingController = PaintingController;
//# sourceMappingURL=painting.controller.js.map