/**
 * Stone Challenge (https://gist.github.com/programa-elixir/1bd50a6d97909f2daa5809c7bb5b9a8a)
 * 
 * Repository: https://github.com/luisdourado33/stone-challenge
 * @luisdourado33 (luis_dourado33@hotmail.com)
 *  HOW-TO-RUN:
 *  If you rather that app generates lists automatically, set generateRandomicLists to TRUE
 *  and set items and emails amount to be generated, through amountItems and amountEmails attributes from "parameters" *  object. 
 */

const { listFactory } = require('./listFactory');

const parameters = {
    generateRandomicLists: true,
    amountItems: 5,
    amountEmails: 5
}

console.log(listFactory(parameters));