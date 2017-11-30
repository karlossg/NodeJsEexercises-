const os = require('os');
const timeFormat = require('./timeFormat');

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
  console.log(`Uptime: ~ ${timeFormat.timeFormat(uptime)}`);
  console.log(`User name: ${userInfo.username}`);
  console.log(`Home dir: ${userInfo.homedir}`);
}

exports.print = getOSinfo;