function timeFormat(seconds) {
  const hours = (seconds/3600).toFixed()
  const secondsLeft = (seconds % 3600)
  const minutes = Math.floor((secondsLeft/60)).toFixed()
  seconds = secondsLeft % 60;
  return `${hours}h ${minutes}min ${seconds}sec`;
} 

exports.timeFormat = timeFormat;