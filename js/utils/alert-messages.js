const ALERT_SHOW_TIME = 3000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '999';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};
const isEscapeKey = (evt) => evt.key === 'Escape';

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseModal();
  }
};

function onCloseModal() {
  document.querySelector('body>.success').remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

const onErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseErrorModal();
  }
};

function onCloseErrorModal() {
  document.querySelector('body>.error').remove();
  document.removeEventListener('keydown', onErrorEscKeydown);
}

const showSubmitOk = () => {
  const okMessage = document.querySelector('#success').content.querySelector('.success');
  const okModal = okMessage.cloneNode(true);
  document.body.append(okModal);
  document.addEventListener('keydown', onPopupEscKeydown);
  okModal.addEventListener('click', onCloseModal);
};

const showErrorMessage = () => {
  const errorMessage = document.querySelector('#error').content.querySelector('.error');
  const errorModal = errorMessage.cloneNode(true);
  document.body.append(errorModal);
  document.addEventListener('keydown', onErrorEscKeydown);
  errorModal.addEventListener('click', onCloseErrorModal);
  errorModal.querySelector('.error__button').addEventListener('click', onCloseErrorModal);
};

export {
  showAlert,
  showSubmitOk,
  showErrorMessage
};
