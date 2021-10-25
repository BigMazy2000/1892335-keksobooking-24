import {getRandomInt} from './get-random-positive-integer.js';

function createRandomIdFromRangeGenerator(max, source) {
  const previousValues = [];
  while (previousValues.length < max) {
    const currentValue = getRandomInt(0, source.length - 1);
    if (!previousValues.includes(currentValue)) {
      previousValues.push(currentValue);
    }
  }
  return previousValues;
}
export {createRandomIdFromRangeGenerator};
