const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json({extended: false}));

const postRoute = require('./Routes/Posts');

app.use('/zuri-crud', postRoute);


// mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongotesting.1lqon.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,  {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('connected to db!!!'))

// mongoose.connect(`mongodb+srv://odofing:xgMFSXculTQd9rSu@mongotesting.1lqon.mongodb.net/ZURI_CRUD?retryWrites=true&w=majority`,  {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('connected to db!!!'))

// connect to db SHELL
  mongoose.connect('mongodb://localhost:27017/Zuri-Crud', {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('connected to db!!!'));



app.listen( 7000, () => console.log(' server connected!'));