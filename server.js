require('dotenv').config();
const express = require('express')
const app = express()
const db = require('./db');


app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
res.send('welcome to our loved blogs');
})


const blogRoutes = require('./routes/blogRoutes');

app.use('/blog',blogRoutes);

app.listen(PORT, () =>{
    console.log("localhost is running");
})