import React from 'react';
import { render } from 'react-dom';

import PostsListContainer from './modules/PostsList';


render(<PostsListContainer />, document.querySelector('#posts-root'));
