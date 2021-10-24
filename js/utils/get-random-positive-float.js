function getRandomFloat(min, max, fractionDigits) {
  max = Math.abs(max);
  min = Math.abs(min);
  if (max <= min || min < 0) { //empty
    return false;
  } else {
    let randomFloat = Math.random();
    randomFloat = randomFloat.toFixed(fractionDigits + 1) * (max - min) + min;
    randomFloat = randomFloat.toFixed(fractionDigits);
    return randomFloat;
  }
}
export {getRandomFloat};
