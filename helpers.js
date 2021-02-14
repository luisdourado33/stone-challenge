const fs = require('fs');

function processFile(filePath) {
    try {
        if (!filePath)
            throw "Por favor, insira um arquivo de entrada válido.";
        const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'))
        return fileContent;
    } catch (error) {
        throw error;
    }
}

function randomNumber() {
    const value = Math.floor(Math.random() * 100)
    return value == 0 ? 1 : value;
}

function checkIsEmpty() {
    return null;
}

module.exports = { processFile, randomNumber, checkIsEmpty }