const express = require('express');
const router = new express.Router();
const bodyParser = require('body-parser');

const accountService = require('./accountService');

router.get("/accounts/:UUID", (req, res) => {
    accountService.getAccountById(req.params.UUID);
});

router.delete("/accounts/:UUID", (req, res) => {
    accountService.deleteAccountById(req.params.UUID);
});

router.post("/accounts", ({body}, res) => {
    accountService.createAccount(
        body.nickname,
        body.email,
        body.avatar,
        body.age,
        body.classification
    );
});

router.put("/accounts/:UUID", ({body}, res) => {
    accountService.updateAccount(
        body.params.UUID,
        body.nickname,
        body.email,
        body.avatar,
        body.age,
        body.classification
    );
});

module.exports = router;