import React, { Component } from 'react';
import { Container } from 'flux/utils';

import PostsStore from './stores';
import AppDispatcher from '../../dispatcher';
import { LOAD_POSTS_SUCCESS } from './constants';

export class PostsList extends Component {

  static getStores() {
    return [PostsStore];
  }

  static calculateState(prevState) {
    return {
      posts: PostsStore.getState(),
    };
  }

  loadPosts() {
    AppDispatcher.dispatch({
      type: LOAD_POSTS_SUCCESS
    });
  }

  render() {

    const loading = this.state.posts.loading ? <h3>loading</h3> : null;

    return (
      <div>
        <h2 onClick={this.loadPosts.bind(this)}>Posts</h2>
        <div>{loading}</div>
      </div>
    );
  }
}

const PostListContainer = Container.create(PostsList);
export default PostListContainer;
