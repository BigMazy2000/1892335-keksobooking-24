function getRandomInt(min, max) {
  min = Math.ceil(Math.abs(min));
  max = Math.floor(Math.abs(max));
  if (max <= min || min < 0) { //empty
    return false;
  } else {
    const randomInt = (Math.floor(Math.random() * (max - min + 1)) + min);
    return randomInt;
  }
}
export {getRandomInt};
