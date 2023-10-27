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
exports.episodesController = void 0;
const episodeService_1 = require("../services/episodeService");
exports.episodesController = {
    // GET /episodes/stream
    stream: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { videoUrl } = req.query;
        const range = req.headers.range;
        try {
            if (typeof videoUrl !== 'string') {
                throw new Error('videoUrl must be of type \'string\'');
            }
            episodeService_1.episodeService.streamEpisodeToResponse(res, videoUrl, range);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    // GET /episodes/:id/watchTime
    getWatchTime: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const episodeId = Number(req.params.id);
        const userId = req.user.id;
        try {
            const watchTime = yield episodeService_1.episodeService.getWatchTime(userId, episodeId);
            return res.json(watchTime);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    // POST /episodes/:id/watchTime
    setWatchTime: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const episodeId = Number(req.params.id);
        const userId = req.user.id;
        const { seconds } = req.body;
        try {
            const watchTime = yield episodeService_1.episodeService.setWatchTime(userId, episodeId, seconds);
            return res.json(watchTime);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    })
};
