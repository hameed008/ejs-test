//* CRUD App using Mongoose in Express Js:
//* --------------------------------------------------

// const express = require('express'); // Common JS
import {} from 'dotenv/config';
import cors from 'cors';

import express from 'express'; // ES6
import connectDB from './db/connectdb.js';
import web from './routes/web.js';
import { join } from 'path';
import './models/Student.js';

const app = express();
const port = process.env.PORT || '8000';
const host = process.env.HOST || 'localhost';

//* Creating database connection url:
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://0.0.0.0:27017';

//# ///////////////////////////////////////
//* Making Connection with Database by importing connection code written in a seperate directory:
connectDB(DATABASE_URL);

//# /////////////////////////////////////////
//* Using urlencoded() to acces body of 'req object'
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '10kb' }));

//# /////////////////////////////////////////
//* Accessing Static files:
// app.use(express.static("public"));
app.use('/', express.static(join(process.cwd(), 'public')));
// app.use('/css', express.static(join(process.cwd(), 'public')));
// app.use('/js', express.static(join(process.cwd(), 'public')));

app.use('/student', express.static(join(process.cwd(), 'public')));
app.use('/student/edit', express.static(join(process.cwd(), 'public')));

//# /////////////////////////////////////////
//* Setting which 'template engine name' we are using like: ejs.
app.set('view engine', 'ejs');

//# /////////////////////////////////////////
//* Loading Routes:
app.get('/', (req, res) => {
  res.render('welcome');
});

app.use('/student', web);
//# ////////////////////////////////////////////
//* Server listening the request:
app.listen(port, () => {
  console.log(`Server listening at ${host}:${port}`);
});
