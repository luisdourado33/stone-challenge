const colors = require('./colors');

function emptyList() {
    const msg = `${colors.BgRed}A lista está vazia!${colors.Reset}`;
    return console.log(msg);
}

function showOutput(emailsList, valueToPay) {
    let dictionary = {}
    emailsList.map(user => {
        let key = user.address ? user.address : user;
        // Insert into dict
        dictionary[key] = valueToPay;
    });
    /**
     * Returns dictionary
     */
    console.log(dictionary)
}

module.exports = { emptyList, showOutput }