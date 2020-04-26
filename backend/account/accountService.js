let accountService = class {
    getAccountById(UUID) {
        console.log(`Account with ${UUID} uuid`);
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
    
    updateAccount(UUID, nickname, email, avatar, age, classification) {
        console.log("Updated account" + UUID + "with following data:\n");
        console.log(nickname, email, classification, avatar, age);
    }
    
    updateAccountAvatarById(UUID, avatar) {
        console(`Updated ${UUID} avatar to ${avatar}`);
    }
    
    updateAccountClassification(UUID, classification) {
        console(`Updated ${UUID} classification to ${classification}`);
    } 
}
    

module.exports = new accountService();