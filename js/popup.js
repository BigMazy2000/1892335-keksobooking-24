import {
  createFinalObject
} from './data.js';

const adTemplate = document.querySelector('#card');
const newAd = adTemplate.content.querySelector('.popup');
const newOffers = createFinalObject();
const offerFragment = document.createDocumentFragment();

function translate(english) {
  switch (english) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
    default:
      'Неизвестен';
  }
}

function addPictures(element, block) {
  const img = block.querySelector('img');
  block.textContent = '';
  element.forEach((el) => {
    const imgElement = img.cloneNode(true);
    imgElement.src = el;
    block.appendChild(imgElement);
  });
}

let marker = 0;
const randomElement = document.createDocumentFragment();
newOffers.forEach(({
  offer,
  author,
}) => {
  const offerElement = newAd.cloneNode(true);
  if (offer.title.length) {
    offerElement.querySelector('.popup__title').textContent = offer.title;
  } else {
    offerElement.querySelector('.popup__title').remove('.popup__title');
  }
  if (offer.address.length) {
    offerElement.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    offerElement.querySelector('.popup__text--address').remove('.popup__text--address');
  }
  if (offer.price) {
    offerElement.querySelector('.popup__text--price').textContent = (`${offer.price} ₽/ночь`);
  } else {
    offerElement.querySelector('.popup__text--price').remove('.popup__text--price');
  }
  if (translate(offer.type) !== 'Неизвестен') {
    offerElement.querySelector('.popup__type').textContent = translate(offer.type);
  } else {
    offerElement.querySelector('.popup__type').remove('.popup__type');
  }
  if (offer.rooms) {
    offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    offerElement.querySelector('.popup__text--capacity').remove('.popup__text--capacity');
  }
  if (offer.checkIn.length && offer.checkOut.length) {
    offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkIn}, выезд до ${offer.checkOut}`;
  } else {
    offerElement.querySelector('.popup__text--time').remove('.popup__text--time');
  }
  if (offer.features) {
    offerElement.querySelector('.popup__features').textContent = offer.features;
  } else {
    offerElement.querySelector('.popup__features').remove('.popup__features');
  }
  if (offer.description) {
    offerElement.querySelector('.popup__description').textContent = offer.description;
  } else {
    offerElement.querySelector('.popup__description').remove('.popup__description');
  }
  if (author.avatar) {
    offerElement.querySelector('.popup__avatar').src = author.avatar;
  } else {
    offerElement.querySelector('.popup__avatar').remove('.popup__avatar');
  }
  const block = offerElement.querySelector('.popup__photos');
  if (block) {
    addPictures(offer.photos, block);
    if (marker === 9) {
      randomElement.appendChild(offerElement);
    }
    marker++;
  }
});

const adOnMap = document.querySelector('#map-canvas');
adOnMap.appendChild(randomElement);
offerFragment;
