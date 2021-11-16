import {
  sendData
} from './api.js';
import {
  myMap,
  mainPinMarker
} from './map.js';
import {
  resetAvatarImage,
  resetAdPicture
} from './images-preview.js';
import {
  BASE_LAT,
  BASE_LNG
} from './data.js';

const adForm = document.querySelector('.ad-form');
const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess(),
      new FormData(evt.target),
    );
  });
};

const formReset = function () {
  adForm.reset();
  myMap.setView({
    lat: BASE_LAT,
    lng: BASE_LNG,
  }, 12);
  mainPinMarker.setLatLng({
    lat: BASE_LAT,
    lng: BASE_LNG,
  });
  resetAvatarImage();
  resetAdPicture();
  const baseCoordinates = document.getElementById('address');
  baseCoordinates.value = `${BASE_LAT} ${BASE_LNG}`;
};

export {
  setUserFormSubmit,
  formReset
};
