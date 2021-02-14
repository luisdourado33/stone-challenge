const fs = require('fs');

function processFile(filePath) {
    try {
        if (!filePath)
            throw "Please, insert a correct JSON filepath.";

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

module.exports = { processFile, randomNumber }