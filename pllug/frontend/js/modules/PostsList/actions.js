import fetch from 'isomorphic-fetch';
import { LOAD_POSTS_SUCCESS } from './constants';
import AppDispatcher from '../../dispatcher';

function loadPostsSuccess(response) {
  AppDispatcher.dispatch({
    type: LOAD_POSTS_SUCCESS,
    posts: response.results,
    next: response.next
  });
}

export function loadPosts(url) {
  const fetchUrl = url || '/api/v1/posts/';
  fetch(fetchUrl)
    .then(res => res.json())
    .then(response => loadPostsSuccess(response))
}
