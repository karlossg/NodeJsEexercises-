const fs = require('fs');
const colors = require('colors');


fs.readdir('./node_modules', 'utf-8', (err, data) => {
  for (i = 0; i < data.length; i++) {
    data[i] = '\n' + (i+1) + ') ' +  data[i];
  }
  fs.writeFile('./npm_modules.txt', `npm modules: ${data}`, (err) => {
    if (err) throw err;
    console.log('Zapisano!'.blue);
    fs.readFile('./npm_modules.txt', 'utf-8', (err, data) => {
        console.log('Dane po zapisie'.blue)
    });
  });
});