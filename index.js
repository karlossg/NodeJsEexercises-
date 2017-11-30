const fs = require('fs');
const colors = require('colors');
// const StatMode = require('stat-mode');

// fs.stat('./cat.jpg', (err, stats) => {
//   const statMode = new StatMode(stats);
//   onsole.log(statMode.toString());
// });

// fs.readFile('./tekst.txt', 'utf-8', (err, data) => {
//   console.log('Dane przed zapisem!'.blue);
//   console.log(data);
//   fs.appendFile('./tekst.txt', '\n\nA tak wyglądają po zapisie!', (err) => {
//     if (err) throw err;
//     console.log('Zapisano!'.blue);
//     fs.readFile('./tekst.txt', 'utf-8', (err, data) => {
//       console.log('Dane po zapisie'.blue)
//       console.log(data);
//     });
//   });
// });

fs.readdir('./node_modules', 'utf-8', (err, data) => {
  fs.writeFile('./npm_modules.txt', `npm modules: ${data}`, (err) => {
    if (err) throw err;
    console.log('Zapisano!'.blue);
    fs.readFile('./npm_modules.txt', 'utf-8', (err, data) => {
        console.log('Dane po zapisie'.blue)
        console.log(data);
    });
  });
});