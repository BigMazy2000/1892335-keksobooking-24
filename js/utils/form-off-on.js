const deactivateForm = () => {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');
  const interactiveElements = adForm.querySelectorAll('fieldset');
  interactiveElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('map__filters--disabled');
  const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
  mapFiltersFieldset.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
  const mapFiltersSelect = mapFilters.querySelectorAll('select');
  mapFiltersSelect.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const activateForm = () => {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');
  const interactiveElements = adForm.querySelectorAll('fieldset');
  interactiveElements.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  });
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.remove('map__filters--disabled');
  const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
  mapFiltersFieldset.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  });
  const mapFiltersSelect = mapFilters.querySelectorAll('select');
  mapFiltersSelect.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  });
};

export {
  deactivateForm,
  activateForm
};
