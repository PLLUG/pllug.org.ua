import fetch from 'isomorphic-fetch';
import AppDispatcher from '../../dispatcher';
import { LOAD_FAQ_SUCCESS } from './constants';

function loadFaqItemsSuccess(items) {
  AppDispatcher.dispatch({
    type: LOAD_FAQ_SUCCESS,
    items: items
  });
}

export function loadFaqItems() {
  fetch('/api/v1/qa_items')
    .then(res => res.json())
    .then(items => loadFaqItemsSuccess(items));
}
