const express = require('express');
const app = express();

app.use(require('body-parser').json());
app.use(require('./account/accountController'));

app.listen(8080, () => {
    console.log("Servidor inicializado com sucesso na porta 8080!");
})