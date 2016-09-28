import React, { Component, PropTypes } from 'react';

default LoadMoreButton extends Component {
  render() {
    const onClick = this.props.onClick;
    return (
      <button onClick={onClick.bind(this)}>Load more</button>
    );
  }
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
