const OSinfo = require('../modules/OSinfo');
// const timeFormat = require('../modules/timeFormat');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if(input !== null) {
    const instruction = input.toString().trim();
    switch (instruction) {
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      case '/nodeVer':
        process.stdout.write(`Node version: ${process.versions.node}`);
        process.exit();
        break;
      case '/sysLang':
        process.stdout.write(`System Language: ${process.env.LANG}`);
        process.exit();
        break;
      case '/getOSinfo':
        OSinfo.print();
        break;
      default:
      process.stderr.write('Wrong instruction!\n');
    } 
  }
});