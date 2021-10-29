const fs = require('fs');

//Defining JSON data
let myData = '{ "name": "Ilker", "salary": 2000 }';

//Writing into employees.json file
fs.writeFile("employees.json", myData, 'utf8', (err) => {
    if (err === true) {
        console.log("Error ocured while writing file");
    }
    console.log("Writing Completed !");
});