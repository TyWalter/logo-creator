// Requiring in the File System package 
const fs = require('fs');

// Function to create new file and iterate through if one is already created
function makeLogo(fileName, contents){
  let counter = 0;
  let newFile = fileName.toLowerCase();

  // Check if the file already exists
  while(fs.existsSync(`./examples/${newFile}`)){
    counter++;
    newFile = `${fileName.replace('.svg', '')}${counter}.svg`;
  };

  // Write the contents to the new file
  fs.writeFile(`./examples/${newFile}`, contents, (err) => {
    if(err){
      console.log(err);
    } else{
      console.log(`
Generated ${newFile} in the examples directory`)
    }
  });
};

// Exports the makeLog function
module.exports = {
  makeLogo
};


