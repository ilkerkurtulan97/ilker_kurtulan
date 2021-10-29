const fs = require('fs');

//Deleting a file
fs.unlink('employees.json', (err) => {
    //Throwing the upcoming errors
    if (err === true) {
        throw err;
    }
    console.log("File Deleted Successful !");
})