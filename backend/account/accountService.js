const firebase = require('firebase')
require('firebase/firestore')

let accountService = class {
    constructor() {
        this.db = firebase.firestore();
    }

    getAccountById(UUID) {  // these are some validations, please ignore
        
        if (UUID == 'beni') {
            return {
                body: 'salve quebrada',
                err: {}
            }
        }

        return {
            body: '',
            err: {
                sc: 404,
                desc: 'Couldn\'t find such user in Cloud Firestore.'
            }
        };
    }

    getAccountByEmail(email) {
        console.log(`Account with ${email} email`);
    }
    
    deleteAccountById(UUID) {
        console.log(`Removed an account with ${UUID} uuid!`);
    }
    
    createAccount(nickname, email, avatar, age, classification) {
        console.log("Created account with following data:\n");
        console.log(nickname, email, classification, avatar, age);
    }
    
    updateAccountById(UUID, nickname, email, avatar, age, classification) {
        console.log("Updated account" + UUID + "with following data:\n");
        console.log(nickname, email, classification, avatar, age);
    }
}
    

module.exports = new accountService();