const colors = require('./colors');

function emptyList() {
    const msg = `${colors.BgRed}A lista está vazia!${colors.Reset}`;
    return console.log(msg);
}

function showOutput(emailsList, valueToPay) {
    emailsList.map(user => {
        let dictionary = {
            "email": user.address ? user.address : user,
            "value": valueToPay
        }

        console.log(dictionary)
            // console.log(`${user.address ? user.address : user}: ${colors.BgRed}${colors.Bright}R$${valueToPay}${colors.Reset}`);
    });
}

module.exports = { emptyList, showOutput }