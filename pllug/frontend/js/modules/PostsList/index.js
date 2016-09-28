import React, { Component } from 'react';
import { Container } from 'flux/utils';

import PostItem from '../PostItem';
import PostsStore from './stores';
import { loadPosts } from './actions';


export class PostsList extends Component {

  static getStores() {
    return [PostsStore];
  }

  static calculateState(prevState) {
    const postsState = PostsStore.getState();
    return {
      posts: postsState.posts,
    };
  }

  componentWillMount() {
    loadPosts();
  }

  render() {
    const posts = this.state.posts;
    const postsNodes = Object.keys(posts).map(key => {
      return <PostItem key={key} post={posts[key]}/>;
    });
    return (
      <section className="blog__posts">
        <div>{postsNodes}</div>
      </section>
    );
  }
}

const PostListContainer = Container.create(PostsList);
export default PostListContainer;
