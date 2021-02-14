const path = require('path');

/**
 * Classes
 */

const Item = require('./classes/Item');

/**
 * Helpers
 */
const { processFile, randomNumber } = require('./helpers');
const INPUT_ITEMS_PATH = path.resolve(__dirname, 'mock', 'items.json');
const INPUT_EMAILS_PATH = path.resolve(__dirname, 'mock', 'emails.json');

/** Instance lists */
const itemsList = [];
const emailsList = [];
let totalValue = 0;
let pricePerEmail = 0;

/**
 * @return 
 */

const getOutputMessage = () => {
    emailsList.forEach(item => {
        item['emails'].forEach(email => {
            console.log(`Usuário: ${email['address']} deve pagar \x1b[41mR$${pricePerEmail}\x1b[0m`);
        });
    })
}

const exportData = () => {
    const itemsData = processFile(INPUT_ITEMS_PATH);
    const emailsData = processFile(INPUT_EMAILS_PATH);

    itemsList.push(itemsData)
    emailsList.push(emailsData)
}

const calculateItems = (itemList, emailList) => {
    totalValue = itemList.reduce((acc, item) => {
        acc += item.amount * item.price;
        return acc;
    }, 0);

    pricePerEmail = (totalValue / emailList.length)
}

const buildLists = (params) => {
    if (params.amountItems && params.amountEmails && params.isAutoGenerate) {
        for (let i = 0; i < params.amountItems; i++) {
            let newItem = new Item(
                `Item #${randomNumber()}`,
                randomNumber(), // Item price
                randomNumber() // Item Amount
            );
            itemsList.push(newItem);
        }

        for (let j = 0; j < params.amountEmails; j++) {
            let newEmail = `${randomNumber()}@email.com`
            emailsList.push(newEmail);
        }
    } else {
        if (!params.isAutoGenerate) {
            exportData(); /** get JSON data */
        }
    }

    /**
     * Calculate total value of buying
     */
    calculateItems(itemsList, emailsList);
    getOutputMessage();
}

module.exports = { buildLists }