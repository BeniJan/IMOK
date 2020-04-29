const firebase = require('firebase');
require('firebase/firestore');

let accountService = class {
    constructor() {
        this.db = firebase.firestore();
    }

    getAccountById = UID => this.db.collection('accounts').doc(UID).get();

    getAccountByEmail = email => this.db.collection('accounts').where('email', '==', email).get();

    getAccountByNickname = nickname => this.db.collection('accounts').where('nickname', '==', nickname).get();
    
    deleteAccountById = UID => this.db.collection('accounts').doc(UID).delete();
    
    createAccount = (nickname, email, avatar, age) => {
        let accountUID = this.db.collection('accounts').doc().id;
        return {
            accountCreationPromise: this.db.collection('accounts').doc(accountUID).set({
                nickname,
                email,
                avatar,
                age,
                isBlocked: false
            }),
            createdAccountUID: accountUID
        }
    };

    blockUser = UID => this.db.collection('accounts').doc(UID).set({isBlocked: true}, {merge: true});

    unblockUser = UID => this.db.collection('accounts').doc(UID).set({isBlocked: false}, {merge: true});
    
    updateAccountById = (UID, {nickname, email, avatar, age}) => this.db.collection('accounts').doc(UID).set({
        nickname, email, avatar, age
    }, {merge: true});

    partiallyUpdateAccountById = (UID, reqBody) => this.db.collection('accounts').doc(UID).set(reqBody, {merge: true});
}
    

module.exports = new accountService();