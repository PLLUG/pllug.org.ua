import React from 'react';
import { render } from 'react-dom';

import FaqList from './modules/FaqList';

console.log(document.querySelector('[data-react-component="faq-list"]'));
console.log(FaqList);

render(<FaqList />, document.querySelector('[data-react-component="faq-list"]'));
