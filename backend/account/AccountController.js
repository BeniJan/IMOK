const express = require('express');
const router = new express.Router();

const bodyParser = require('body-parser')
const accountService = require('./AccountRepository');

router.get("/accounts/:UUID", (req, res) => {
    let getReq = accountService.getAccountById(req.params.UUID);

    getReq.then(user => {
        if (user.data() === undefined) {
            res.status(404).send({errorMessage: 'Couldn\'t find such users in firestore.'});
        }
        res.status(200).send(user.data());
    }).catch(err => res.status(500).send({errorMessage: 'Failed to fetch user info duo following issue: ' + err}));
});

router.get("/accounts", (req, res) => {
    let getReq = accountService.getAccountByEmail(req.query.email);

    getReq.then(snapshot => {

        snapshot.forEach(user => {
            if (user === undefined) {
                res.status(404).send({errorMessage: 'Couldn\'t find such users in firestore.'});
            }
            res.status(200).send(user.data());
        })
    }).catch(err => res.status(500).send({errorMessage: 'Failed to fetch user info duo following issue: ' + err}));
});

router.delete("/accounts/:UUID", (req, res) => {
    let deletionReq = accountService.deleteAccountById(req.params.UUID);
    
    deletionReq.then(user => {
        res.status(204).send({message:"User successfully deleted."});
    }).catch(err => res.status(500).send({errorMessage:'Failed to delete user account due following issue: ' + err}));
});

router.post("/accounts", (req, res) => {
    let {nickname, email, avatar, age} = req.body;
    let creationReq = accountService.createAccount(nickname, email, avatar, age);

    creationReq.accountCreationPromise.then(result => {
        res.status(201).send({createdAccountUID: accCreationReq.createdAccountUID});
    }).catch(err => res.send(500).send({errorMessage:'Failed to create account due following issue: ' + err}));
});

router.put("/accounts/:UUID", (req, res) => {
    let updateReq = accountService.updateAccountById(req.params.UUID, req.body);
    updateReq.then(result => res.status(204).send({message:'Account successfully updated'}))
    .catch(err => res.status(500).send({errorMessage:'Failed to update account due following issue: ' + err}));
});

router.patch("/accounts/:UUID", (req, res) => {
    let patchReq = accountService.partiallyUpdateAccountById(req.params.UUID, req.body);
    patchReq.then(() => res.status(204).send({message:'Account successfully updated'}))
    .catch(err => res.status(500).send({errorMessage:'Failed to update account due following issue: ' + err}))
});

module.exports = router;