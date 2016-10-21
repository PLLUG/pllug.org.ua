import React, { Component, PropTypes } from 'react';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDisabled: true,
      inputValue: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.inputValue);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <form className="question-form">
        <input className="question-form__input" onChange={this.handleChange} />
        <button className="question-form__button" onClick={this.handleClick}>Надіслати запитання</button>
      </form>
    );
  }
}

export default QuestionForm;
