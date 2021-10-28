const fs = require('fs');

fs.unlink('employees.json', (err) => {
    if (err === true) {
        throw err;
    }
    console.log("File Deleted Successful !");
})