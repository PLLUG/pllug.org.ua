import { ReduceStore } from 'flux/utils';

import AppDispatcher from '../../dispatcher';
import { LOAD_POSTS_SUCCESS } from './constants';


class PostsStore extends ReduceStore {
  getInitialState() {
    return {
      loading: false,
      posts: [],
      nextUrl: null
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case LOAD_POSTS_SUCCESS:
        console.log(action.next);
        return Object.assign({}, state, {
          loading: !state.loading,
          posts: state.posts ? state.posts.concat(action.posts) : action.posts,
          nextUrl: action.next
        });
      default:
        return state;
    }
  }
}

export default new PostsStore(AppDispatcher);
