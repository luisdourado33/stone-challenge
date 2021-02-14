/**
 * Stone Challenge
 * 
 * Repository: https://github.com/luisdourado33/stone-challenge
 * @luisdourado33
 * 
 */

const { listFactory } = require('./listFactory');

const parameters = {
    generateRandomicLists: false,
    amountItems: 5,
    amountEmails: 5
}

console.log(listFactory(parameters));