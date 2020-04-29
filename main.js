const express = require('express');
const app = express();

const firebase = require('firebase');
require('firebase/firestore');

const startFirebase = require('./firebase/firebaseSetup');

require('dotenv').config();
const apiKey = process.env.FIREBASE_API_KEY;

const bodyParser = require('body-parser');

startFirebase(apiKey);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./account/AccountController'));
app.use(require('./feed-do-bem/FeedController'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor inicializado com sucesso na porta ${process.env.PORT}!`);
})