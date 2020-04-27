const firebase = require('firebase');
require('firebase/firestore');

let accountService = class {
    constructor() {
        this.db = firebase.firestore();
    }

    getAccountById = (UUID) => this.db.collection('accounts').doc(UUID).get();
    
    deleteAccountById = (UUID) => this.db.collection('accounts').doc(UUID).delete();
    
    createAccount = (nickname, email, avatar, age) => {
        let accountUID = this.db.collection('accounts').doc().id;
        return {
            accountCreationPromise: this.db.collection('accounts').doc(accountUID).set({ nickname, email, avatar, age }),
            createdAccountUID: accountUID
        }
    }
    
    updateAccountById = (UUID, {nickname, email, avatar, age}) => this.db.collection('accounts').doc(UUID).set({ nickname, email, avatar, age })

    partiallyUpdateAccountById = (UUID, reqBody) => this.db.collection('accounts').doc(UUID).set(reqBody, {merge: true})
}
    

module.exports = new accountService();