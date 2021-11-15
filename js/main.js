import { NUMBER_OF_MARKERS } from './data.js';
import './user-form.js';
import './popup.js';
import './map.js';
import {
  renderDomains
} from './map.js';
import {
  setUserFormSubmit
} from './form-submit.js';
import {
  getData
} from './api.js';
import {
  formReset
} from './form-submit.js';
import {
  setFiltersClick
} from './filters.js';

getData(
  (domain) => {
    renderDomains(domain.slice(0, NUMBER_OF_MARKERS));
    setTimeout(setFiltersClick(domain.slice(0, NUMBER_OF_MARKERS)), 500);
  },
);
setUserFormSubmit(formReset);

