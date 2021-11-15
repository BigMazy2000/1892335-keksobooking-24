import {
  markerGroup,
  renderDomains
} from './map.js';
const setFilters = function (domain) {
  let filterResult = domain;
  const selectedHousingType = document.querySelector('[name="housing-type"]').value;
  const selectedHousingPrice = document.querySelector('[name="housing-price"]').value;
  const selectedHousingRooms = document.querySelector('[name="housing-rooms"]').value;
  const selectedHousingGuests = document.querySelector('[name="housing-guests"]').value;
  const selectedHousingWifi = document.getElementById('filter-wifi');
  const selectedHousingDishwasher = document.getElementById('filter-dishwasher');
  const selectedHousingParking = document.getElementById('filter-parking');
  const selectedHousingWasher = document.getElementById('filter-washer');
  const selectedHousingElevator = document.getElementById('filter-elevator');
  const selectedHousingConditioner = document.getElementById('filter-conditioner');
  if (selectedHousingType !== 'any') {
    filterResult = filterResult.filter((item) => item.offer.type === selectedHousingType);
  }
  if (selectedHousingPrice !== 'any') {
    switch (selectedHousingPrice) {
      case 'middle':
        filterResult = filterResult.filter((item) => item.offer.price >= 10000 && item.offer.price <= 50000);
        break;
      case 'low':
        filterResult = filterResult.filter((item) => item.offer.price < 10000);
        break;
      case 'high':
        filterResult = filterResult.filter((item) => item.offer.price > 50000);
        break;
    }
  }
  if (selectedHousingRooms !== 'any') {
    filterResult = filterResult.filter((item) => item.offer.rooms === selectedHousingRooms);
  }
  if (selectedHousingGuests !== 'any') {
    filterResult = filterResult.filter((item) => item.offer.guests === selectedHousingGuests);
  }
  const selectFeatures = function (param, feature) {
    if (param.checked) {
      filterResult = filterResult.filter((item) => {
        if (typeof item.offer.features !== 'undefined') {
          return item.offer.features.includes(feature);
        }
      });
    }
  };
  selectFeatures(selectedHousingWifi, 'wifi');
  selectFeatures(selectedHousingDishwasher, 'dishwasher');
  selectFeatures(selectedHousingParking, 'parking');
  selectFeatures(selectedHousingWasher, 'washer');
  selectFeatures(selectedHousingElevator, 'elevator');
  selectFeatures(selectedHousingConditioner, 'conditioner');
  markerGroup.clearLayers();
  renderDomains(filterResult);
};
const formElements = document.querySelectorAll('.map__filters select, .map__filters input[type="checkbox"]');
const setFiltersClick = (domain) => {
  formElements.forEach((item) => {
    item.addEventListener('change', () => {
      setFilters(domain);
    });
  });
};
export {
  setFilters,
  setFiltersClick
};
