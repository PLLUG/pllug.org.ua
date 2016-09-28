import fetch from 'isomorphic-fetch';
import { LOAD_POSTS_SUCCESS } from './constants';
import AppDispatcher from '../../dispatcher';

function loadPostsSuccess(posts) {
  AppDispatcher.dispatch({
    type: LOAD_POSTS_SUCCESS,
    posts: posts
  });
}

export function loadPosts() {
  fetch('/api/v1/posts/')
    .then(res => res.json())
    .then(posts => loadPostsSuccess(posts))
}
