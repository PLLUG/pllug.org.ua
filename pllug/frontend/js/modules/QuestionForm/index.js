import React, { Component, PropTypes } from 'react';
import { sendQuestion } from './actions';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDisabled: true,
      inputValue: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    sendQuestion({ question: this.state.inputValue });
    this.setState({ inputValue: '' });
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <form className="question-form">
        <input className="question-form__input" onChange={this.handleChange} value={this.state.inputValue}/>
        <button className="question-form__button" onClick={this.handleClick}>Надіслати запитання</button>
      </form>
    );
  }
}

export default QuestionForm;
