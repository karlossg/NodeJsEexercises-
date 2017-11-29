const os = require('os');

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
        getOSinfo();
        break;
      default:
      process.stderr.write('Wrong instruction!\n');
    } 
  }
});

function getOSinfo() {
  let type = os.type();
  if(type === 'Darwin') {
      type = 'OSX';
  } else if(type === 'Windows_NT') {
      type = 'Windows';
  }
  const release = os.release();
  const cpu = os.cpus()[0].model;
  const uptime = os.uptime();
  const userInfo = os.userInfo();
  console.log(`System: ${type}`);
  console.log(`Release: ${release}`);
  console.log(`CPU model: ${cpu}`);
  console.log(`Uptime: ~ ${(uptime / 60).toFixed(0)} min`);
  console.log(`User name: ${userInfo.username}`);
  console.log(`Home dir: ${userInfo.homedir}`);
}

exports.print = getOSinfo;