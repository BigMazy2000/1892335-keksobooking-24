const translate = function (english) {
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
};
const addPictures = function (element, block) {
  const img = block.querySelector('img');
  block.textContent = '';
  if (typeof (element) !== 'undefined') {
    element.forEach((el) => {
      const imgElement = img.cloneNode(true);
      imgElement.src = el;
      block.appendChild(imgElement);
    });
  }
};
const makeMapElement = function (author, offer) {
  const newAd = document.querySelector('#card').content.querySelector('.popup');
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
  if (offer.checkin.length && offer.checkout.length) {
    offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
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
  }
  return offerElement;
};
export {
  makeMapElement
};
