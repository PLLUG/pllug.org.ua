import React, { Component, PropTypes } from 'react';
import FaqStore from './stores';


class FaqList extends Component {

  static getStores() {
    return [FaqStore];
  }

  static calculateState(prevState) {
    const faqState = FaqStore.getState();
    return {
      faqItems: faqState.items
    };
  }

  render() {
    const faqItems = this.state.faqItems;
    const faqNodes = Object.keys(faqItems).map(key => {
      return <div>Faq</div>
    });
    return (
      <section class="faq__list">{faqNodes}</section>
    );
  }
}

export default FaqList;
