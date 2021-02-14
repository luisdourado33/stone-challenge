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
    const itemData = fs.readFileSync(itemPath, 'utf8');
    const emailData = fs.readFileSync(emailPath, 'utf8');

    if (itemData.length === 0 || emailData.length === 0) {
        return false;
    } else {
        let data = {
            items: JSON.parse(itemData.items),
            emails: JSON.parse(emailData.emails)
        }

        return data
    }
}

const calculateTotalValue = (list) => {
    let totalValue = list.reduce((acc, item) => {
        acc += item.amount * item.price;
        return acc;
    }, 0)

    return totalValue;
}

module.exports = { randomNumber, checkIsEmpty, calculateTotalValue, checkJson }