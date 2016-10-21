import React, { Component, PropTypes } from 'react';


class FaqItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      answerVisible: !this.state.answerVisible
    });
  }

  render() {
    const item = this.props.item;
    const answerVisible = this.state.answerVisible;
    return (
      <dl onClick={this.handleClick} className={`qa-item ${answerVisible ? 'qa-item--active' : ''}`}>
        <dt className="qa-item__question" >{item.question}</dt>
        { answerVisible && <dd className="qa-item__answer">{item.answer}</dd> }
      </dl>
    );
  }
}

FaqItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default FaqItem;
