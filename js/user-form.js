import {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MAX_PRICE,
  BASE_LAT,
  BASE_LNG
} from './data.js';
import {
  formReset
} from './form-submit.js';

const GUEST_NUMBER_ONE = 1;
const GUEST_NUMBER_TWO = 2;
const GUEST_NUMBER_THREE = 3;
const GUEST_NUMBER_HUNDRED = 100;

const getPlaceholder = (accommodation) => {
  switch (accommodation) {
    case 'flat':
      return '1000';
    case 'bungalow':
      return '0';
    case 'house':
      return '5000';
    case 'palace':
      return '10000';
    case 'hotel':
      return '3000';
    default:
      'не установлено';
  }
};

const baseCoordinates = document.getElementById('address');
baseCoordinates.value = `${BASE_LAT} ${BASE_LNG}`;
const titleInput = document.getElementById('title');
titleInput.setCustomValidity('Заполните это поле');
titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

const priceInput = document.getElementById('price');
priceInput.setCustomValidity('Укажите цену');
priceInput.addEventListener('input', () => {
  const priceValue = priceInput.value;
  if (priceValue > MAX_PRICE) {
    priceInput.setCustomValidity(`Цена должна быть меньше ${  MAX_PRICE }`);
  } else if (priceValue < Number(priceInput.min)) {
    priceInput.setCustomValidity(`Цена должна быть больше или равна ${  priceInput.min }`);
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
});

const addressInput = document.getElementById('address');
addressInput.setCustomValidity('Введите адрес');
addressInput.addEventListener('input', () => {
  const addressLenght = addressInput.value.length;
  if (!addressLenght) {
    addressInput.setCustomValidity('Введите адрес');
  } else {
    addressInput.setCustomValidity('');
  }
  addressInput.reportValidity();
});

const typeSelect = document.getElementById('type');
typeSelect.addEventListener('change', () => {
  const selectedType = typeSelect.value;
  const propperPlaceholder = getPlaceholder(selectedType);
  priceInput.placeholder = propperPlaceholder;
  priceInput.min = Number(propperPlaceholder);
});

const roomNumber = document.getElementById('room_number');
const guestNumber = document.getElementById('capacity');
const options = guestNumber.querySelectorAll('option');
checkingRoomsAndGuests();
roomNumber.addEventListener('change', () => {
  checkingRoomsAndGuests();
});

function checkingRoomsAndGuests() {
  const selectedRoomNumber = Number(roomNumber.value);
  switch (selectedRoomNumber) {
    case GUEST_NUMBER_HUNDRED:
      options.forEach((element) => {
        if (Number(element.value) !== 0) {
          element.setAttribute('disabled', 'disabled');
        } else {
          element.removeAttribute('disabled');
        }
      });
      break;
    case GUEST_NUMBER_ONE:
      options.forEach((element) => {
        if (Number(element.value) !== 1) {
          element.setAttribute('disabled', 'disabled');
        } else {
          element.removeAttribute('disabled');
        }
      });
      break;
    case GUEST_NUMBER_TWO:
      options.forEach((element) => {
        if (Number(element.value) !== 2 && Number(element.value) !== 1) {
          element.setAttribute('disabled', 'disabled');
        } else {
          element.removeAttribute('disabled');
        }
      });
      break;
    case GUEST_NUMBER_THREE:
      options.forEach((element) => {
        if (Number(element.value) !== 3 && Number(element.value) !== 2 && Number(element.value) !== 1) {
          element.setAttribute('disabled', 'disabled');
        } else {
          element.removeAttribute('disabled');
        }
      });
      break;
  }
}

const checkInTime = document.getElementById('timein');
const checkOutTime = document.getElementById('timeout');
const checkOutOptions = checkOutTime.querySelectorAll('option');
checkingInOutTime();

checkInTime.addEventListener('change', () => {
  checkingInOutTime();
});

function checkingInOutTime() {
  const selectedCheckInTime = checkInTime.value;
  checkOutOptions.forEach((element) => {
    if (element.value !== selectedCheckInTime) {
      element.setAttribute('disabled', 'disabled');
    } else {
      element.removeAttribute('disabled');
      checkOutTime.value = selectedCheckInTime;
    }
  });
}

const resetLink = document.querySelector('.ad-form__reset');
resetLink.addEventListener('click', formReset);
