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
exports.userService = void 0;
const models_1 = require("../models");
function filterLastEpisodeFromEachCourse(episodes) {
    const coursesOnList = [];
    const lastEpisodes = episodes.reduce((currentList, episode) => {
        if (!coursesOnList.includes(episode.courseId)) {
            coursesOnList.push(episode.courseId);
            currentList.push(episode);
            return currentList;
        }
        const episodeFromSameCourse = currentList.find(e => e.courseId === episode.courseId);
        if (episodeFromSameCourse.order > episode.order) {
            return currentList;
        }
        const listWithoutEpisodeFromSameCourse = currentList.filter(e => e.courseId !== episode.courseId);
        listWithoutEpisodeFromSameCourse.push(episode);
        return listWithoutEpisodeFromSameCourse;
    }, []);
    return lastEpisodes;
}
exports.userService = {
    findByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield models_1.User.findOne({
            attributes: [
                'id',
                ['first_name', 'firstName'],
                ['last_name', 'lastName'],
                'phone',
                'birth',
                'email',
                'password',
                'created_at'
            ],
            where: { email }
        });
        return user;
    }),
    create: (attributes) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield models_1.User.create(attributes);
        return user;
    }),
    update: (id, values) => __awaiter(void 0, void 0, void 0, function* () {
        const { firstName, lastName, phone, birth, email } = values;
        const [affectedRows, updatedUsers] = yield models_1.User.update({
            firstName,
            lastName,
            phone,
            birth,
            email
        }, {
            where: { id },
            returning: true
        });
        return updatedUsers[0];
    }),
    updatePassword: (id, password) => __awaiter(void 0, void 0, void 0, function* () {
        const [affectedRows, updatedUsers] = yield models_1.User.update({
            password
        }, {
            where: { id },
            individualHooks: true,
            returning: true
        });
        return updatedUsers[0];
    }),
    getKeepWatchingList: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const userWithWatchingEpisodes = yield models_1.User.findByPk(id, {
            attributes: [],
            include: {
                association: 'episodes',
                include: [{
                        association: 'course'
                    }],
                through: {
                    as: 'watchTime'
                }
            }
        });
        if (!userWithWatchingEpisodes) {
            throw new Error('Usuário não encontrado');
        }
        const keepWatchingList = filterLastEpisodeFromEachCourse(userWithWatchingEpisodes.episodes);
        // @ts-ignore
        keepWatchingList.sort((a, b) => a.watchTime.updatedAt < b.watchTime.updatedAt ? 1 : -1);
        return keepWatchingList;
    })
};
