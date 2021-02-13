const path = require('path');

/**
 * Stone Challenge
 * 
 * Repository: https://github.com/luisdourado33/stone-challenge
 * @luisdourado33
 * 
 */

const { buildLists } = require('./build');

const parameters = {
    amountItems: null,
    amountEmails: null
}

console.log(buildLists(parameters));
