const express = require('express');
const router = new express.Router();

const bodyParser = require('body-parser')
const accountService = require('./AccountService');

router.get("/accounts/:UID", (req, res) => {
    accountService.getAccountById(req.params.UID).then(user => {
        if (user.data() === undefined) {
            res.status(404).send({errorMessage: 'Couldn\'t find such users in firestore.'});
        }
        let data = user.data();
        data.id = user.id;
        res.status(200).send(data);
    }).catch(err => res.status(500).send({
        errorMessage: 'Failed to fetch user info duo following issue: ' + err
    }));
});

router.get("/accounts", (req, res) => {
    let getReq;
    if (req.query.email !== undefined) {
        getReq = accountService.getAccountByEmail(req.query.email);
    } else if (req.query.nickname !== undefined) {
        getReq = accountService.getAccountByNickname(req.query.nickname);
    } else {
        res.status(400).send({errorMessage: 'No query found for email or nickname. Please provide one of them.'})
    }

    getReq.then(snapshot => {
        if (snapshot.empty) {
            res.status(404).send({errorMessage: 'Couldn\'t find such users in firestore.'});
        }
        snapshot.forEach(user => {
            let data = user.data();
            data.id = user.id;
            res.status(200).send(data);
        })
    })
    .catch(err => res.status(500).send({errorMessage: 'Failed to fetch user info duo following issue: ' + err}));
});

router.delete("/accounts/:UID", (req, res) => {
    accountService.deleteAccountById(req.params.UID)
    .then(user => {res.status(204).send();})
    .catch(err => res.status(500).send({
        errorMessage:'Failed to delete user account due following issue: ' + err
    }));
});

router.post("/accounts", (req, res) => {
    let {nickname, email, avatar, age} = req.body;
    let accCreationReq = accountService.createAccount(nickname, email, avatar, age);
    accCreationReq.accountCreationPromise
    .then(result => {res.status(201).send({createdAccountUID: accCreationReq.createdAccountUID});})
    .catch(err => res.status(500).send({
        errorMessage:'Failed to create account due following issue: ' + err
    }).end());
});

router.post("/accounts/:UID/block", (req, res) => {
    accountService.blockUser(req.params.UID)
    .then(result => res.status(204).send())
    .catch(err => res.status(500).send({
        errorMessage:'Failed to block account due following issue: ' + err
    }));
});

router.post("/accounts/:UID/unblock", (req, res) => {
    accountService.unblockUser(req.params.UID)
    .then(result => res.status(204).send())
    .catch(err => res.status(500).send({
        errorMessage:'Failed to unblock account due following issue: ' + err
    }));
});

router.put("/accounts/:UID", (req, res) => {
    accountService.updateAccountById(req.params.UID, req.body)
    .then(result => res.status(204).send())
    .catch(err => res.status(500).send({
        errorMessage:'Failed to update account due following issue: ' + err
    }));
});

router.patch("/accounts/:UID", (req, res) => {
    accountService.partiallyUpdateAccountById(req.params.UID, req.body)
    .then(() => res.status(204).send())
    .catch(err => res.status(500).send({
        errorMessage:'Failed to update account due following issue: ' + err
    }));
});

module.exports = router;