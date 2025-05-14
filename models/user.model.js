import mongoose from 'mongoose';

//firstname, lastname, email, password, phone, userId, account number, balance, kyclevel, pin
const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    userId: { type: String, required: true, unique: true },
    accountNumber: { type: String, required: true, unique: true },
    balance: { type: Number, required: true, default: 0 },
    kycLevel: { type: String, required: true, enum: ['basic', 'verified', 'premium'], default: 'basic' },
    pin: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;