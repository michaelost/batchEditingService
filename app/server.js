require('dotenv').config();
import bodyParser from 'body-parser';
import morgan from 'morgan';
import express from 'express';
import app from './app.js';
import batchRouter from './routes/batch.js';

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
app.use('/', batchRouter);

