const fs = require('fs');

const randomNumber = () => {
    const value = Math.floor(Math.random() * 100);
    return value == 0 ? 1 : value;
}

const checkIsEmpty = (params) => {
    if (params.amountItems == 0 || params.amountEmails == 0) {
        return false;
    }
    return true;
}

const checkJson = (itemPath, emailPath) => {
    const itemData = JSON.parse(fs.readFileSync(itemPath, 'utf8'));
    const emailData = JSON.parse(fs.readFileSync(emailPath, 'utf8'));

    let obj;
    if (itemData && emailData) {
        // console.log(itemData)
        if (itemData['items'].length === 0 || emailData['emails'].length === 0) {
            obj = false;
        } else {
            obj = {
                itemData,
                emailData
            }
        }
    } else {
        obj = false;
    }

    return obj;
}

const calculateTotalValue = (list) => {
    let totalValue = list.reduce((acc, item) => {
        acc += item.amount * item.price;
        return acc;
    }, 0)

    return totalValue;
}

module.exports = { randomNumber, checkIsEmpty, calculateTotalValue, checkJson }