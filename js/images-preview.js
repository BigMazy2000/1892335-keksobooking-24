const handleAvatarSelect = function (evt) {
  const files = evt.target.files;
  const selectedFile = files[0];
  const thisInput = this;
  const reader = new FileReader();
  reader.onload = (() => (e) => {
    thisInput.parentElement.previousElementSibling.querySelector('img').setAttribute('src', e.target.result);
  })(selectedFile);
  reader.readAsDataURL(selectedFile);
};
export {
  handleAvatarSelect
};
const handleDomainSelect = function (evt) {
  const files = evt.target.files;
  const selectedFile = files[0];
  const thisInput = this;
  const reader = new FileReader();
  reader.onload = (() => (e) => {
    const image = `<img src="${  e.target.result  }" alt="Фотография жилья" width="70" height="70">`;
    thisInput.parentElement.nextElementSibling.innerHTML = image;
  })(selectedFile);
  reader.readAsDataURL(selectedFile);
};
document.getElementById('avatar').addEventListener('change', handleAvatarSelect, false);
document.getElementById('images').addEventListener('change', handleDomainSelect, false);
export {
  handleDomainSelect
};
const resetAvatarImage = function () {
  const avatarImage = document.querySelector('.ad-form-header__preview img');
  avatarImage.src = './img/muffin-grey.svg';
};
export {
  resetAvatarImage
};
const resetAdPicture = function () {
  const adImage = document.querySelector('.ad-form__photo');
  adImage.innerHTML = '';
};
export {
  resetAdPicture
};
