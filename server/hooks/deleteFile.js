const fs = require('fs')

const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);
      }
    });
}; 
  
module.exports = deleteFile