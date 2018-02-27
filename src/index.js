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
  var len = arr.length;
  for (let i = len - 1; i > 1; i--) {
    if (base % i == 0) {
      maxNum = i;
      break;
    }
  }

  var count = 0;
  while (number != 0) {
    number = Math.floor(number / maxNum);
    count += number; // счётчик числа нулей
  }  
  return count;
}
