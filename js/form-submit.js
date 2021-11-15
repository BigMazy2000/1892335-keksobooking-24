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
    lat: 35.6819,
    lng: 139.7522,
  }, 12);
  mainPinMarker.setLatLng({
    lat: 35.6819,
    lng: 139.7522,
  });
  resetAvatarImage();
  resetAdPicture();
};
export {
  setUserFormSubmit,
  formReset
};
