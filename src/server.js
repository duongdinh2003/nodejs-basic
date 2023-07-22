// const express = require('express');
import express from "express";
import configViewEngine from "./configs/viewEngine";
require('dotenv').config();

const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
console.log('>>> check port: ', port);

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('test/index.ejs');
})

app.get('/about', (req, res) => {
    res.send(`I'm Dinh!`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})