import {
  showAlert
} from './utils/alert-messages.js';
import {
  showSubmitOk,
  showErrorMessage
} from './utils/alert-messages.js';

const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((domain) => {
      onSuccess(domain);
    })
    .catch(() => {
      showAlert('Не удалось получить данные. Попробуйте ещё раз');
    });
};

const sendData = (onSuccess, body) => {
  fetch('https://24.javascript.pages.academy/keksobooking1', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        showSubmitOk();
      } else {
        showErrorMessage();
      }
    })
    .catch(() => {
      showErrorMessage();
    });
};

export {
  getData,
  sendData
};
