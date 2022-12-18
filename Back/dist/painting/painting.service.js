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
exports.PaintingService = void 0;
const common_1 = require("@nestjs/common");
const painting_schema_1 = require("./painting.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PaintingService = class PaintingService {
    constructor(paintingModel) {
        this.paintingModel = paintingModel;
    }
    async getPaintings() {
        return await this.paintingModel.find({ category: "Painting & Sculpture" });
    }
    async getArtist() {
        return await this.paintingModel.find({ category: "Creative spaces & Artists" });
    }
    async getInstallation() {
        return await this.paintingModel.find({ category: "Installation & Plants" });
    }
    async getPainting(id) {
        return await this.paintingModel.findOne({ id: id });
    }
    async create(body) {
        await this.paintingModel.create({ id: body.id, category: body.category, name: body.name, data: body.data, fotoUrl: body.fotoUrl, instagram: body.instagram });
        return this.getPaintings();
    }
    async update(id, body) {
        this.paintingModel.updateOne({ id: id }, { $set: { id: body.id, category: body.category, name: body.name, data: body.data, fotoUrl: body.fotoUrl, instagram: body.instagram } });
        return this.getPaintings();
    }
    async delete(id) {
        await this.paintingModel.deleteMany({ id: id });
        return this.getPaintings();
    }
};
PaintingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(painting_schema_1.Painting.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PaintingService);
exports.PaintingService = PaintingService;
//# sourceMappingURL=painting.service.js.map