import fetch from 'isomorphic-fetch';
import AppDispatcher from '../../dispatcher';
import { LOAD_FAQ_SUCCESS } from './constants';

function loadFaqItemsSuccess(items) {
  AppDispatcher.dispatch({
    items: items
  });
}

export function loadFaqItems() {
  fetch('/api/v1/faq_items')
    .then(res => res.json())
    .then(items => loadFaqItemsSuccess(items));
}
