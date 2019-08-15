const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const api = express();

mongoose.connect('mongodb+srv://desafio-bossa-box:bossaboxdesafio@cluster0-zkovk.mongodb.net/desafio-bossa-box?retryWrites=true&w=majority',{useNewUrlParser: true})

api.use(express.json());
api.use(routes);
api.use(cors());
api.listen(process.env.PORT||3000);