function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min < 0) {  } else {
    const randomInt = (Math.floor(Math.random() * (max - min + 1)) + min);
    return randomInt;
  };
}
getRandomInt (10,20);

function getRandomFloat(min, max, fractionDigits) {
  if (max <= min || min < 0) {    } else {
    let randomFloat = Math.random();
        randomFloat = randomFloat.toFixed(fractionDigits + 1) * (max - min) + min;
        randomFloat = randomFloat.toFixed(fractionDigits);
    return randomFloat;
  }
}
getRandomFloat(10.5, 20.7, 2); 

