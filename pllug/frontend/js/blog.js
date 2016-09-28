import React from 'react';
import { render } from 'react-dom';

import PostsList from './modules/PostsList';
render(<PostsList />, document.querySelector('[data-react-component="posts-root"]'));
