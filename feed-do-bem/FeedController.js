const express = require('express');
const router = new express.Router();

const bodyParser = require('body-parser');
const randomInt = require('random-int');
const feedService = require('./FeedService');

router.get('/posts/:UID', (req, res) => {
    feedService.getPostById(req.params.UID).then(user => {
        if (user.data() === undefined) {
            res.status(404).send({errorMessage: 'Couldn\'t find such post in firestore.'});
        }
        let data = user.data();
        data.id = user.id;
        res.status(200).send(data);
    }).catch(err => res.status(500).send({
            errorMessage: 'Failed to fetch post info duo following issue: ' + err
    }));
});

router.get('/posts', (req, res) => {
    let getReq;
    if (req.query.type === 'news') {
        getReq = feedService.getAllNews();
    } else if (req.query.type === 'tips') {
        getReq = feedService.getAllTips();
    } else getReq = feedService.getAllPosts();

    getReq.then(collection => {
        res.status(200).send(collection.docs.map(doc => {
            let data = doc.data();
            data.id = doc.id;
            return data;
        }));
    }).catch(err => res.status(500).send(
        {errorMessage: 'Couldn\'t fetch posts due following issue: ' + err}
    ));
});

router.delete('/posts/:UID', (req, res) => {
    feedService.deletePostById(req.params.UID).then(user => {
        res.status(204).send();
    }).catch(err => res.status(500).send({errorMessage:'Failed to delete post account due following issue: ' + err}));
});

router.put('/posts/:UID', (req, res) => {
    feedService.updatePostById(req.params.UID, req.body)
    .then(result => res.status(204).send())
    .catch(err => res.status(500).send({
        errorMessage:'Failed to update post due following issue: ' + err
    }));
});

router.patch('/posts/:UID', (req, res) => {
    feedService.partiallyUpdatePostById(req.params.UID, req.body)
    .then(result => res.status(204).send())
    .catch(err => res.status(500).send({
        errorMessage:'Failed to update post due following issue: ' + err
    }));
});

router.post('/posts', (req, res) => {
    let creationReq = feedService.createPost(req.body);
    creationReq.postCreationPromise.then(result => {
        res.status(201).send({createdPostUID: creationReq.createdPostUID});
    }).catch(err => res.status(500).send({
        errorMessage:'Failed to create post due following issue: ' + err
    }));
});

module.exports = router;