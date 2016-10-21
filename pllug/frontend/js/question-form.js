import React from 'react';
import { render } from 'react-dom';

import QuestionForm from './modules/QuestionForm';

render(<QuestionForm />, document.querySelector('[data-react-component="question-form"]'));
