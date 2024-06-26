function dms(n) {
  let degrees = parseInt(n);
  let minutes = parseInt((n - degrees) * 60);
  let seconds = parseInt((((n - degrees) * 60) - minutes) * 60);
  
  
  minutes = String(minutes);
  seconds = String(seconds);
  
  minutes = minutes.length === 1 ? '0' + minutes : minutes;
  seconds = seconds.length === 1 ? '0' + seconds : seconds;
  
  return `${degrees}°${minutes}'${seconds}"`;
}

console.log(dms(30));  // 30°00'00"
console.log(dms(76.73));  // 76°43'48"
console.log(dms(254.6));  // 254°35'59"
console.log(dms(93.034773));  // 93°02'05"
console.log(dms(0));  // 0°00'00"
console.log(dms(360));  // 360°00'00" or 0°00'00"