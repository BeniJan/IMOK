const express = require('express');
const router = new express.Router();
const bodyParser = require('body-parser');

const accountService = require('./accountService');

router.get("/accounts/:UUID", (req, res) => {
    let response = accountService.getAccountById(req.params.UUID);
    handleExceptions(res, response);
    
    res.status(200).send(response.body);
});

router.delete("/accounts/:UUID", (req, res) => {
    let response = accountService.deleteAccountById(req.params.UUID);
    handleExceptions(res, response);
    
    res.status(204).send(response.body);
});

router.post("/accounts", ({nickname, email, avatar, age, classification}, res) => {
    let response = accountService.createAccount(nickname, email, avatar, age, classification);
    handleExceptions(res, response);

    res.status(201).send(response.body);
});

router.put("/accounts/:UUID", ({nickname, email, avatar, age, classification}, res) => {
    accountService.updateAccountById(params.UUID, nickname, email, avatar, age, classification);
});

const handleExceptions = (resOp, resObj) => {
    if (Object.keys(resObj.err).length > 0) {
        resOp.status(resObj.err.sc).send(resObj.err.desc);
    }
}

module.exports = router;