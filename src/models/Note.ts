import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    name: String,
    content: String,
    userId: String,
}, { collection: 'notes' });

const Note = mongoose.model('Note', noteSchema)
export default Note;