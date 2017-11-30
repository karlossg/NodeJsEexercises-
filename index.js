const EventEmitter = require("events").EventEmitter;
const OSinfo = require('./modules/OSinfo');

const emitter = new EventEmitter();
emitter.on("beforeCommand", (instruction) => {
    console.log('You wrote: ' + instruction + ', trying to run command');
});
emitter.on("afterCommand",  () => {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if(input !== null) {
    const instruction = input.toString().trim();

    emitter.emit('beforeCommand', instruction);
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
    emitter.emit('afterCommand'); 
  }
});