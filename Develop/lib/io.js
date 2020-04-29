const fs = require("fs");

const io = {
    writeToFile : function (fileName, data) {
        fs.writeFileSync(fileName, data, (err) => {
            if (err) throw err;
        })
    },
    readFromFile : function (fileName) {
        return fs.readFileSync(fileName,"utf-8")
    },
    exists: function (filepath) {
        return fs.existsSync(filepath) 
    }
}

module.exports = io;