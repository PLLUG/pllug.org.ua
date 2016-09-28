import React, { Component, PropTypes } from 'react';


class PostItem extends Component {
  render() {
    let post = this.props.post;
    return (
      <article className="posts__item">
        <header className="item__header">
          <h3 className="item__title">{post.title}</h3>
          <div className="item__created-at">Написана: {post.created_at}</div>
        </header>
        <section className="item__content">{post.content}</section>
      </article>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
