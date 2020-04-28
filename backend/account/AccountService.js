const firebase = require('firebase');
require('firebase/firestore');

let accountService = class {
    constructor() {
        this.db = firebase.firestore();
    }

    getAccountById = (UID) => this.db.collection('accounts').doc(UID).get();

    getAccountByEmail = (email) => this.db.collection('accounts').where('email', '==', email).get();

    getAccountByNickname = (nickname) => this.db.collection('accounts').where('nickname', '==', nickname).get();
    
    deleteAccountById = (UID) => this.db.collection('accounts').doc(UID).delete();
    
    createAccount = (nickname, email, avatar, age) => {
        let accountUID = this.db.collection('accounts').doc().id;
        return {
            accountCreationPromise: this.db.collection('accounts').doc(accountUID).set({ nickname, email, avatar, age }),
            createdAccountUID: accountUID
        }
    }
    
    updateAccountById = (UUID, {nickname, email, avatar, age}) => this.db.collection('accounts').doc(UUID).set({
        nickname, email, avatar, age
    })

    partiallyUpdateAccountById = (UUID, reqBody) => this.db.collection('accounts').doc(UUID).set(reqBody, {merge: true})
}
    

module.exports = new accountService();