import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../../dispatcher';
import { LOAD_FAQ_SUCCESS } from './constants';

class FaqStore extends ReduceStore {
  getInitialState() {
    return {
      loading: false,
      items: []
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case LOAD_FAQ_SUCCESS:
        return Object.assign({
          loading: false,
          items: action.items
        });
      default:
        return state;
    }
  }
}

export default new FaqStore(AppDispatcher);
