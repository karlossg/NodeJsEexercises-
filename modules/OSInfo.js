const os = require('os');
const colors = require('colors');
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
  console.log(colors.grey(`System: ${type.white}`));
  console.log(colors.red(`Release: ${release.white}`));
  console.log(colors.blue(`CPU model: ${cpu.white}`));
  console.log(colors.green(`Uptime: ~ ${timeFormat.timeFormat(uptime).white}`));
  console.log(colors.yellow(`User name: ${userInfo.username.white}`));
  console.log(`Home dir: ${userInfo.homedir}`);
}

exports.print = getOSinfo;