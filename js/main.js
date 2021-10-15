const numberOfRecords = 10;
const TITLES = [
  'Заголовок предложения 1',
  'Заголовок предложения 2',
  'Заголовок предложения 3',
  'Заголовок предложения 4',
  'Заголовок предложения 5',
  'Заголовок предложения 6',
  'Заголовок предложения 7',
  'Заголовок предложения 8',
  'Заголовок предложения 9',
  'Заголовок предложения 10',
];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_TIME = ['12-00', '13-00', '14-00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = [
  'Очень хорошее описание 1',
  'Очень хорошее описание 2',
  'Очень хорошее описание 3',
  'Очень хорошее описание 4',
  'Очень хорошее описание 5',
  'Очень хорошее описание 6',
  'Очень хорошее описание 7',
  'Очень хорошее описание 8',
  'Очень хорошее описание 9',
  'Очень хорошее описание 10',
];
const PICTURES = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const LOC_LAT_MIN = 35.650000;
const LOC_LAT_MAX = 35.70000;
const LOC_LNG_MIN = 139.70000;
const LOC_LNG_MAX = 139.80000;
const PRICE_MIN = 50;
const PRICE_MAX = 1000;
const ROOMS_MAX = 6;
const GUESTS_MAX = 10;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min < 0) { //empty
    return false;
  } else {
    const randomInt = (Math.floor(Math.random() * (max - min + 1)) + min);
    return randomInt;
  }
}

function getRandomFloat(min, max, fractionDigits) {
  if (max <= min || min < 0) { //empty
    return false;
  } else {
    let randomFloat = Math.random();
    randomFloat = randomFloat.toFixed(fractionDigits + 1) * (max - min) + min;
    randomFloat = randomFloat.toFixed(fractionDigits);
    return randomFloat;
  }
}

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

function getFeatures(arrayName) {
  const featuresRange = getRandomInt(1, arrayName.length);
  const idRange = createRandomIdFromRangeGenerator(featuresRange, arrayName);
  const selectedFeatures = [];
  for (let i = 0; i <= featuresRange - 1; i++) {
    const idNumber = idRange[i];
    selectedFeatures[i] = arrayName[idNumber];
  }
  return selectedFeatures;
}

function getAuthor(number) {

  const indexString = String(number).padStart(2, '0');
  const fileName = `/img/avatars/user${indexString}.png`;
  const currentAvatar = {
    avatar: fileName,
  };
  return currentAvatar;
}

function getLocation() {
  const lat = getRandomFloat(LOC_LAT_MIN, LOC_LAT_MAX, 5);
  const lng = getRandomFloat(LOC_LNG_MIN, LOC_LNG_MAX, 5);
  const currentLocation = {
    lat,
    lng,
  };
  return currentLocation;
}

function getOffer(index, address) {
  let currentOffer = [];
  const price = getRandomInt(PRICE_MIN, PRICE_MAX);
  const rooms = getRandomInt(1, ROOMS_MAX);
  const currentType = TYPE[getRandomInt(0, 4)];
  const guests = getRandomInt(1, GUESTS_MAX);
  const checkIn = CHECK_TIME[getRandomInt(0, 2)];
  const checkOut = CHECK_TIME[getRandomInt(0, 2)];
  let currentFeatures = [];
  currentFeatures = getFeatures(FEATURES);
  let currentPictures = [];
  currentPictures = getFeatures(PICTURES);
  currentOffer = {
    title: TITLES[index],
    price: price,
    address: address,
    type: currentType,
    rooms: rooms,
    guests: guests,
    checkIn: checkIn,
    checkOut: checkOut,
    features: currentFeatures,
    description: DESCRIPTIONS[index],
    photos: currentPictures,
  };
  return currentOffer;
}

function createFinalObject() {
  const finalObject = [];
  for (let i = 0; i < numberOfRecords; i++) {
    const author = getAuthor(i);
    const location = getLocation();
    const currentAddress = `${location.lat}, ${location.lng}`;
    const offer = getOffer(i, currentAddress);
    const finalObjectElement = {
      author,
      location,
      offer,
    };
    finalObject.push(finalObjectElement);
  }
  return finalObject;
}

createFinalObject();
