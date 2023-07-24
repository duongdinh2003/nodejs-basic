// const express = require('express');
import express from "express";
import configViewEngine from './configs/viewEngine';
import initWebRoute from './router/web';
// import connection from './configs/connectDB';

require('dotenv').config();

const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
console.log('>>> check port: ', port);

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})