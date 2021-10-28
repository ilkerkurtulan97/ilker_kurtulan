const fs = require('fs');

fs.readFile('employees.json', 'utf8', (err, myJSON) => {
    if (err === true) {
        console.log(`Error ocured while reading file: ${err}`);
    }
    console.log("Reading File Successful !");
    console.log(myJSON);
})