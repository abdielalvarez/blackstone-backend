"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const noteSchema = new Schema({
    name: String,
    content: String,
    userId: String,
}, { collection: 'notes' });
const Note = mongoose_1.default.model('Note', noteSchema);
exports.default = Note;
