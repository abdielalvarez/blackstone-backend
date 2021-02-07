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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Note_1 = __importDefault(require("../models/Note"));
class Notes {
    constructor() {
        this.router = express_1.Router();
    }
    getNotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.query.id;
                const notesDB = yield Note_1.default.find({ userId });
                console.log('notesDB', notesDB);
                res.json(notesDB);
            }
            catch (error) {
                return res.status(400).json({
                    mensaje: 'Ocurrio un error',
                    error,
                });
            }
        });
    }
    getNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.query.id;
                const noteDB = yield Note_1.default.findOne({ _id });
                console.log('noteDB', noteDB);
                res.json(noteDB);
            }
            catch (error) {
                return res.status(400).json({
                    mensaje: 'Ocurrio un error',
                    error,
                });
            }
        });
    }
    createNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const noteDB = yield Note_1.default.create(body);
                console.log('noteDB', noteDB);
                res.json(noteDB);
            }
            catch (error) {
                return res.status(400).json({
                    mensaje: 'Ocurrio un error',
                    error,
                });
            }
        });
    }
    updateNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.query.id;
                const body = req.body;
                const noteDB = yield Note_1.default.findByIdAndUpdate(_id, body, { new: true });
                if (!noteDB) {
                    return res.status(400).json({
                        message: 'No se encontró el id indicado',
                    });
                }
                res.json(noteDB);
            }
            catch (error) {
                return res.status(400).json({
                    message: 'Ocurrio un error',
                    error,
                });
            }
        });
    }
    deleteNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.query.id;
                const noteDB = yield Note_1.default.findByIdAndDelete({ _id });
                console.log('noteDB', noteDB);
                res.json(noteDB);
            }
            catch (error) {
                return res.status(400).json({
                    mensaje: 'Ocurrio un error',
                    error,
                });
            }
        });
    }
    routes() {
        this.router.get('/get_notes', this.getNotes);
        this.router.get('/get_note', this.getNote);
        this.router.post('/create_note', this.createNote);
        this.router.put('/update_note', this.updateNote);
        this.router.delete('/delete_note', this.deleteNote);
    }
}
const notes = new Notes();
notes.routes();
exports.default = notes.router;
