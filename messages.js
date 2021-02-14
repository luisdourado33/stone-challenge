const colors = require('./colors');

function emptyList() {
    const msg = `${colors.BgRed}A lista está vazia!${colors.Reset}`;
    return console.log(msg);
}

function showOutput(emailsList, valueToPay) {
    emailsList.map(user => {
        console.log(`${user}: ${colors.BgRed}${colors.Bright}R$${valueToPay}${colors.Reset}`);
    });
}

module.exports = { emptyList, showOutput }