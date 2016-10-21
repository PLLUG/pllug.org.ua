import { ReduceStore } from 'flux/utils';
import AppDipatcher from '../../Dispatcher';
import { SEND_QUESTION_SUCCESS } from './constants';

class QuestionFormStore extends ReduceStore {
  getInitialState() {
    return {};
  }

  reduce(state, action) {
    switch (action.type) {
      case SEND_QUESTION_SUCCESS:
        return state;
      default:
        return state;
    }
  }
}

export default new QuestionFormStore(AppDipatcher);
