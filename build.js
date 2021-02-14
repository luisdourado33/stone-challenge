const path = require('path');

const Item = require('./classes/Item');

const { processFile, randomNumber } = require('./helpers');
const INPUT_ITEMS_PATH = path.resolve(__dirname, 'mock', 'items.json');
const INPUT_EMAILS_PATH = path.resolve(__dirname, 'mock', 'emails.json');

const itemsList = [];
const emailsList = [];
let totalValue = 0;
let pricePerEmail = 0;
let isAutoGenerate;

const getOutputMessage = () => {
    if (isAutoGenerate) {
        emailsList.forEach(item => {
            console.log(`Usuário: ${item} deve pagar \x1b[41mR$${pricePerEmail}\x1b[0m`);
        });
    } else {
        emailsList.forEach(item => {
            item['emails'].forEach(email => {
                console.log(`Usuário: ${email['address']} deve pagar \x1b[41mR$${pricePerEmail}\x1b[0m`);
            });
        })
    }
}

const exportData = () => {
    const itemsData = processFile(INPUT_ITEMS_PATH);
    const emailsData = processFile(INPUT_EMAILS_PATH);

    itemsList.push(itemsData)
    emailsList.push(emailsData)
}

const calculateItems = (itemList, emailList) => {
    if (isAutoGenerate) {
        totalValue = itemList.reduce((acc, item) => {
            acc += item.amount * item.price;
            return acc;
        }, 0);
    } else {
        totalValue = itemsList[0]['items'].reduce((acc, item) => {
            acc += item.amount * item.price;
            return acc;
        }, 0);
    }

    pricePerEmail = (totalValue / emailList.length)
}

const buildLists = (params) => {
    isAutoGenerate = params.isAutoGenerate;
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

    calculateItems(itemsList, emailsList);
    getOutputMessage();
}

module.exports = { buildLists }