import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
}, { collection: 'users' })

userSchema.plugin(uniqueValidator, { message: 'This email already exists, choose another one' })

userSchema.methods.toJSON = function () {
    const obj: any = this.toObject()
    delete obj.password;
    return obj
}

const User = mongoose.model('User', userSchema)
export default User;