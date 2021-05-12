const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

app.use(express.json({extended: false}));

const postRoute = require('./Routes/Posts');

app.use('/zuri-crud', postRoute);


  mongoose.connect(process.env.DB_CONNECTION,  {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('connected to remote db!!!'))

 
 app.listen(process.env.PORT || 4000, () => console.log(' server connected!'));