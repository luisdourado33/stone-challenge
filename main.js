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
    isAutoGenerate: true,
    amountItems: 5,
    amountEmails: 5
}

console.log(buildLists(parameters));
