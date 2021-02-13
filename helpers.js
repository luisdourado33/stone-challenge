const path = require('path');
const fs = require('fs');

function processFile(filePath, list = []){
    try {
        if (!filePath)
            throw "Please, insert a correct JSON filepath.";
        
        const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        return fileContent;
    } catch (error) {
        throw error;
    }
}

module.exports = { processFile }