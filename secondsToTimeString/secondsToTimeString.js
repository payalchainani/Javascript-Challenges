// Please do not change the name of this function
function secondsToTimeString(seconds) {
  const secondsToString = [
    [Math.floor(seconds / 31536000), 'years'],
    [Math.floor((seconds % 31536000) / 86400), 'days'],
    [Math.floor(((seconds % 31536000) % 86400) / 3600), 'hours'],
    [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), 'minutes'],
    [(((seconds % 31536000) % 86400) % 3600) % 60, 'seconds'],
    ];
    
    let secondsString = '';
    
    for (let i = 0; i < secondsToString.length; i++) {
    if (secondsToString[i][0] === 0) continue;
    secondsString += ' ' + secondsToString[i][0] + ' ' + (secondsToString[i][0] === 1 ? secondsToString[i][1].slice(0, secondsToString[i][1].length - 1) : secondsToString[i][1]);
    }
    return secondsString.trim();
  

}

if ( typeof module !== 'undefined' ) {
  module.exports = {secondsToTimeString};
}
