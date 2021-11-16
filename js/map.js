import {
  makeMapElement
} from './popup.js';
import {
  deactivateForm,
  activateForm
} from './utils/form-off-on.js';
import {
  BASE_LAT,
  BASE_LNG,
  ZOOM
} from './data.js';

deactivateForm();
const myMap = L.map('map-canvas')
  .on('load', () => activateForm())
  .setView({
    lat: BASE_LAT,
    lng: BASE_LNG,
  }, ZOOM);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(myMap);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [30, 50],
  iconAnchor: [15, 50],
});

const mainPinMarker = L.marker({
  lat: BASE_LAT,
  lng: BASE_LNG,
}, {
  draggable: true,
  icon: mainPinIcon,
});

const mapAddressInput = document.getElementById('address');
mainPinMarker.addTo(myMap);
mainPinMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  mapAddressInput.value = (`${coordinates.lat.toFixed(5)} ${coordinates.lng.toFixed(5)}`);
});

const markerGroup = L.layerGroup().addTo(myMap);

const createMarker = (author, location, offer) => {
  const {
    lat,
    lng,
  } = location;
  const pinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [20, 40],
    iconAnchor: [10, 40],
  });
  const marker = L.marker({
    lat,
    lng,
  }, {
    pinIcon,
  });
  marker
    .addTo(markerGroup)
    .bindPopup(makeMapElement(author, offer));
};

const renderDomains = (domain) => {
  domain.forEach(({
    author,
    location,
    offer,
  }) => {
    createMarker(author, location, offer);
  });
};

export {
  renderDomains,
  myMap,
  mainPinMarker,
  markerGroup
};
