import React, { Component } from 'react';
import { Container } from 'flux/utils';

import PostItem from '../PostItem';
import LoadMoreButton from '../LoadMoreButton';
import PostsStore from './stores';
import { loadPosts } from './actions';


export class PostsList extends Component {
  constructor(props) {
    super(props);
    this._handleLoadMoreClick = this._handleLoadMoreClick.bind(this);
  }

  static getStores() {
    return [PostsStore];
  }

  static calculateState(prevState) {
    return PostsStore.getState();
  }

  componentWillMount() {
    loadPosts();
  }

  _handleLoadMoreClick() {
    const { nextUrl } = this.state;
    loadPosts(nextUrl);
  }

  render() {
    const { posts, nextUrl } = this.state;
    const postsNodes = Object.keys(posts).map(key => {
      return <PostItem key={key} post={posts[key]}/>;
    });
    return (
      <section className="blog__posts">
        <div>{postsNodes}</div>
        { nextUrl ? (
          <div className="blog__load-more">
            <LoadMoreButton onClick={this._handleLoadMoreClick} />
          </div>
        ) : null }

      </section>
    );
  }
}

const PostListContainer = Container.create(PostsList);
export default PostListContainer;
