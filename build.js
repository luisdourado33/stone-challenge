const path = require('path');

/**
 * Classes
 */

const Item = require('./classes/Item');

/**
 * Data JSON (not required) and helpers
 */
const { processFile } = require('./helpers');
const INPUT_ITEMS_PATH = path.resolve(__dirname, 'mock', 'items.json');
const INPUT_EMAILS_PATH = path.resolve(__dirname, 'mock', 'emails.json');

/** Instance lists */
const itemsList = [];
const emailsList = [];

/** Factory */
const buildLists = (params) => {
    if (params.amountItems && params.amountEmails) {

        /** Building items list */
        for (let i = 0; i < params.amountItems; i++) {
            let newItem = new Item(
                `Item #${Math.floor(Math.random() * 100)}`,
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100)
            );
            itemsList.push(newItem);
        }

        /** Building emails list */
        for (let i = 0; i < params.amountEmails; i++) {
            emailsList.push(`${Math.floor(Math.random() * 100)}@email.com`);
        }
    } else {
        /**
         * Get data from json
         */

        const itemData = processFile(INPUT_ITEMS_PATH);
        itemData.map(item => {
            itemsList.push(item)
        });
    }

    return { itemsList }
}

module.exports = {
    buildLists
}