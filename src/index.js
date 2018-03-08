module.exports = function longestConsecutiveLength(array) {
  if(!array.length) return 0;
  array.sort( (a, b) => a - b );
  var arrOfCounters = [], counter = 0;
  for(i = 0; i < array.length; i++) {
    if(array[i + 1] == array[i]) continue;
    if(array[i + 1] - array[i] == 1) counter++;
    else {
      arrOfCounters.push(++counter);
      counter = 0;
    }
  }
  return Math.max(...arrOfCounters);
}
