const fs = require('fs');
const path = require('path');

/**
 * Helpers
 */
const { randomNumber, checkIsEmpty, checkJson, calculateTotalValue } = require('./helpers');

/**
 * Messages pattern
 */
const Message = require('./messages');

/**
 * JSON
 */
const ITEMS_PATH = path.resolve(__dirname, 'mock', 'items.json');
const EMAILS_PATH = path.resolve(__dirname, 'mock', 'emails.json');

const itemsList = [];
const emailsList = [];


const listFactory = (params) => {
    if (params.generateRandomicLists) {
        if (checkIsEmpty(params)) {
            for (let i = 0; i < params.amountItems; i++) {
                let item = {
                    "name": `Item #${randomNumber()}`,
                    "price": Math.round(randomNumber()),
                    "amount": Math.round(randomNumber())
                }

                itemsList.push(item);
            }

            for (let j = 0; j < params.amountEmails; j++) {
                let email = {
                    address: `${randomNumber()}@email.com`
                }
                emailsList.push(email.address);
            }

            Message.showOutput(emailsList, calculateTotalValue(itemsList))
        } else {
            Message.emptyList();
        }
    } else {
        /**
         * Checks if JSON file is empty
         */
        let checks = checkJson(ITEMS_PATH, EMAILS_PATH);
        if (checks) {
            let items = checks.itemData['items'];
            let emails = checks.emailData['emails'];

            /**
             * Round values to the next integer value
             */
            items.map(item => {
                item.price = Math.round(item.price)
            });

            Array.prototype.push.apply(itemsList, items);
            Array.prototype.push.apply(emailsList, emails);
            Message.showOutput(emailsList, calculateTotalValue(itemsList));
        } else {
            Message.emptyList();
        }
    }
}

module.exports = { listFactory }