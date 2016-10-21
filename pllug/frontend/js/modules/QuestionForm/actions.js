import fetch from 'isomorphic-fetch';
import AppDipatcher from '../../Dispatcher';
import { SEND_QUESTION_SUCCESS } from './constants';


export function sendQuestionSuccess() {
  AppDipatcher.dispatch({
    type: SEND_QUESTION_SUCCESS
  });
}

export function sendQuestion(body) {
  fetch('/api/v1/qa_items/', {
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(result => sendQuestionSuccess(result));
}
