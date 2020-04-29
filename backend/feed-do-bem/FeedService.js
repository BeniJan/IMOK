const firebase = require('firebase');
require('firebase/firestore');

let feedService = class {
    constructor() {
        this.db = firebase.firestore();
    }

    getAllPosts = () => this.db.collection('posts').get();
    
    getAllNews = () => this.db.collection('posts').where('isNews', '==', true).get();

    getAllTips = () => this.db.collection('posts').where('isNews', '==', false).get();

    getPostById = (UID) => this.db.collection('posts').doc(UID).get();
    
    deletePostById = (UID) => this.db.collection('posts').doc(UID).delete();
    
    createPost = ({title, body, isNews, isSponsored}) => {
        let createdPostUID = this.db.collection('posts').doc().id;
        return {
            postCreationPromise: this.db.collection('posts').doc(createdPostUID)
            .set({title, body, isNews, isSponsored}),
            createdPostUID: createdPostUID
        }
    };
    
    updatePostById = (UID, {title, body, isNews, isSponsored}) => this.db.collection('posts')
        .doc(UID).set({title, body, isNews, isSponsored});
    
    partiallyUpdatePostById = (UID, reqBody) => this.db.collection('posts')
        .doc(UID).set(reqBody, {merge: true});
}


module.exports = new feedService();