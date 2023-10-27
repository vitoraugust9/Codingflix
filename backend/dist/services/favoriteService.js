"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteService = void 0;
const models_1 = require("../models");
exports.favoriteService = {
    isFavorited: (courseId, userId) => __awaiter(void 0, void 0, void 0, function* () {
        const favorite = yield models_1.Favorite.findOne({
            where: {
                courseId,
                userId
            }
        });
        return favorite ? true : false;
    }),
    findByUserId: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const favorites = yield models_1.Favorite.findAll({
            attributes: [['user_id', 'userId']],
            where: { userId },
            include: {
                association: 'course',
                attributes: [
                    'id',
                    'name',
                    'synopsis',
                    ['thumbnail_url', 'thumbnailUrl'],
                    'featured',
                    ['category_id', 'categoryId']
                ]
            },
        });
        const courses = favorites.map(favorite => favorite.course);
        return {
            userId,
            courses
        };
    }),
    create: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        const favoriteAlreadyExists = yield models_1.Favorite.findOne({
            where: {
                userId,
                courseId
            }
        });
        if (favoriteAlreadyExists) {
            throw new Error('Curso já existente na lista');
        }
        const favorite = yield models_1.Favorite.create({
            userId,
            courseId
        });
        return favorite;
    }),
    delete: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        yield models_1.Favorite.destroy({
            where: {
                userId,
                courseId
            }
        });
    })
};
