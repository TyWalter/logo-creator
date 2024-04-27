// Requiring in the File System package 
const fs = require('fs');

// Takes the filename and it's contents and creates a new file
function makeLogo(fileName, contents){
  let counter = 1;
  let newFile = fileName;
  while(fs.existsSync(newFile)){
    counter++;
    newFile = `${fileName}${counter}.svg`;
  }
  fs.writeFile(`../examples/${newFile}`, contents, (err) => {
    if(err) console.log(err);
  });
};

// Exports the makeLog function
module.exports = {
  makeLogo
};