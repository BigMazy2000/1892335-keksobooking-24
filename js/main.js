// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Результат: целое число из диапазона "от...до"
// Параметры min и max проверяются на условия: max<=min, оба параметра положительные числа. 
// При выполнении этих условий в консоль выводится сообщение "Incorrect data"


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min < 0) {
    console.log("Incorrect data")
  } else {
    const randomInt = (Math.floor(Math.random() * (max - min + 1)) + min);
    return randomInt;
  }
}
getRandomInt (10,20);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона ВКЛЮЧИТЕЛЬНО! 
//Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
// Параметры min и max проверяются на условия: max<=min, оба параметра положительные числа. 

function getRandomFloat(min, max, fractionDigits) {
  if (max <= min || min < 0) {
    console.log("Incorrect data")
  } else {
    let randomFloat = Math.random();
        randomFloat = randomFloat.toFixed(fractionDigits + 1) * (max - min) + min;
        randomFloat = randomFloat.toFixed(fractionDigits);
    return randomFloat;
  }
}
getRandomFloat(10, 20, 1);

