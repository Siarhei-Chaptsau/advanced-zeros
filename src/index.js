module.exports = function getZerosCount(number, base) {
  const a = 256 / 2;
  function isPrime(num) { // функция поиска простых чисел
    for (let i = 2; i < num; i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

  var arr = [];
  for (let i = 1; i < a; i++){
    if(isPrime(i)) {
      arr.push(i); // создали массив простых чисел по 127
    }
  }

  var maxNum = base; // макс. число на которое делится базовая система без остатка
  var count = 0;
  var len = arr.length;
  for (let i = len - 1; arr[i] > 1; i--) {
    if (base % arr[i] == 0) {
      maxNum = arr[i];
      break;
    }
  }
  while (number != 0) {
    number = Math.floor(number / maxNum);
    count += number; // счётчик числа нулей
  }
  return count;
}
