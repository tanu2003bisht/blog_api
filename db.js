const mongoose = require('mongoose')

const mongoUrl = process.env.MONGODB_URL;
//const mongoUrlLocal = process.env.MONGODB_URL_LOCAL;
mongoose.connect(mongoUrl);
const db = mongoose.connection;

db.on('connected',() =>{
    console.log('mongodb connected');
})

db.on('error',(err) =>{
    console.error('error');
})

db.on('disconnected',() =>{
    console.log('disconnected mongodb');
})

module.exports = db;