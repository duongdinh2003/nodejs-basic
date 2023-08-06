// const express = require('express');
import express from "express";
import configViewEngine from './configs/viewEngine';
import initWebRoute from './router/web';
import initAPIRoute from './router/api';
// import connection from './configs/connectDB';

require('dotenv').config();

var morgan = require('morgan');


const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
console.log('>>> check port: ', port);

app.use((req, res, next) => {
    // check -> return res.send()
    console.log('>>> run into my middleware');
    console.log(req.method);
    next();
})

app.use(morgan('combined'));

// cấu hình cho post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

// init API route
initAPIRoute(app);

// handle 404 not found
app.use((req, res) => {
    return res.render('404.ejs');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})