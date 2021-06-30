const mongoose = require('mongoose');
const { Schema } = mongoose;

//buat struktur database nya
//id sudah dibuatkan otomatis, tapi jika ingin manual buat sendiri dengan type data tertentu silahkan
const userSchema = new Schema({
    name: String,
    email: String,
}, { timestamps: true }); //ini agar mongodb membuat created_at dan updated_at secara otomatis

//parameter pertama = nama model (nama model singular, nama collection jamak)
//parameter kedua = nama schema
const User = mongoose.model('User', userSchema); //petakan dalam sebuah model
module.exports = User; 
