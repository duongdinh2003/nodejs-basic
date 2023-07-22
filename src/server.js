// const express = require('express');
import express from "express";
import configViewEngine from "./configs/viewEngine";

const app = express();
const path = require('path');
const port = 8080;

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