const express = require('express');
const app = express();

require('dotenv').config();
const apiKey = process.env.FIREBASE_API_KEY;

const Firebase = require('firebase');
const startFirebase = require('./firebase/configModel');
startFirebase(apiKey);

startFirebase()

app.use(require('body-parser').json());
app.use(require('./account/accountController'));

app.listen(8080, () => {
    console.log("Servidor inicializado com sucesso na porta 8080!");
})