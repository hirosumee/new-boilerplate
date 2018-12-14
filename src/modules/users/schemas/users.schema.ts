import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
     fullname: String,
     email: String,
     password: String,
     phone: String
});
