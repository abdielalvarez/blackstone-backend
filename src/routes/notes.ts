import { Request, Response, Router } from 'express';
import Note from '../models/Note';

class Notes {

    router: Router;

    constructor() {
        this.router = Router()
    }

    async getNotes(req: Request, res: Response) {
        try {
            const userId = req.query.id
            const notesDB = await Note.find({ userId })
            console.log('notesDB', notesDB);
            res.json(notesDB)
        } catch (error) {
            return res.status(400).json({
                mensaje: 'Ocurrio un error',
                error,
            })
        }
    }

    async getNote(req: Request, res: Response) {
        try {
            const _id = req.query.id
            const noteDB = await Note.findOne({ _id })
            console.log('noteDB', noteDB);
            res.json(noteDB)
        } catch (error) {
            return res.status(400).json({
                mensaje: 'Ocurrio un error',
                error,
            })
        }
    }

    async createNote(req: Request, res: Response) {
        try {
            const body = req.body;
            const noteDB = await Note.create(body)
            console.log('noteDB', noteDB);
            res.json(noteDB)
        } catch (error) {
            return res.status(400).json({
                mensaje: 'Ocurrio un error',
                error,
            })
        }
    }

    async updateNote(req: Request, res: Response) {
        try {
            const _id = req.query.id
            const body = req.body;
            const noteDB = await Note.findByIdAndUpdate(
                _id,
                body,
                { new: true }
            )
            if (!noteDB) {
                return res.status(400).json({
                    message: 'No se encontró el id indicado',
                })
            }
            res.json(noteDB)
        } catch (error) {
            return res.status(400).json({
                message: 'Ocurrio un error',
                error,
            })
        }
    }

    async deleteNote(req: Request, res: Response) {
        try {
            const _id = req.query.id
            const noteDB = await Note.findByIdAndDelete({ _id })
            console.log('noteDB', noteDB);
            res.json(noteDB)
        } catch (error) {
            return res.status(400).json({
                mensaje: 'Ocurrio un error',
                error,
            })
        }
    }

    routes() {
        this.router.get('/get_notes', this.getNotes)
        this.router.get('/get_note', this.getNote)
        this.router.post('/create_note', this.createNote)
        this.router.put('/update_note', this.updateNote)
        this.router.delete('/delete_note', this.deleteNote)
    }
    
}

const notes = new Notes()
notes.routes()

export default notes.router;

