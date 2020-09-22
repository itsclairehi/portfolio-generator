//only works if line 7-8 are also in page-template.js... is this an instructional error? 9.2.6

const fs = require('fs');
const generatePage = require('./src/page-template.js');


const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});