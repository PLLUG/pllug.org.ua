import { ReduceStore } from 'flux/utils';

import AppDispatcher from '../../dispatcher';
import { LOAD_POSTS_SUCCESS } from './constants';


class PostsStore extends ReduceStore {
  getInitialState() {
    return {
      loading: false,
      posts: []
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case LOAD_POSTS_SUCCESS:
        return Object.assign({}, state, {
          loading: !state.loading,
          posts: action.posts
        });
      default:
        return state;
    }
  }
}

export default new PostsStore(AppDispatcher);
