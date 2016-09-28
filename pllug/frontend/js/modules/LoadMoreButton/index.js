import React, { Component, PropTypes } from 'react';

class LoadMoreButton extends Component {
  render() {
    const onClick = this.props.onClick;
    return (
      <button className="load-more" onClick={onClick.bind(this)}>Load more</button>
    );
  }
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
