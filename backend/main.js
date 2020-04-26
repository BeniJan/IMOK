const express = require('express');
const app = express();
const firebase = require('firebase');
require('firebase/firestore');

const startFirebase = require('./firebase/configModel');

require('dotenv').config();
const apiKey = process.env.FIREBASE_API_KEY;

startFirebase(apiKey);

app.use(require('body-parser').json());
app.use(require('./account/accountController'));

app.listen(8080, () => {
    console.log("Servidor inicializado com sucesso na porta 8080!");
})