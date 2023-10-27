"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryResourceOptions = void 0;
exports.categoryResourceOptions = {
    navigation: {
        name: 'Catálogo',
        icon: 'Categories'
    },
    editProperties: ['name', 'position'],
    filterProperties: ['name', 'position', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name', 'position'],
    showProperties: ['id', 'name', 'position', 'createdAt', 'updatedAt']
};
