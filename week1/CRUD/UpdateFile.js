const fs = require('fs');
const myFile = './employees.json';
const file = require(myFile)

//New update data we want to overwrite
file.name = "Alper";
file.salary = "3000";

fs.writeFile('employees.json', JSON.stringify(file), (err) => {
    if (err === true) {
        console.log(`Error ocured while writing file: ${err}`);
    }
    console.log('Update Successful !');
});