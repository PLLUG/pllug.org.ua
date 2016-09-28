import React, { Component, PropTypes } from 'react';

class FaqList extends Component {
  render() {
    const faqItems = this.store.faqItems;
    const faqNodes = Object.keys(faqItems).map(key => {
      return <div>Faq</div>
    });
    return (
      <section class="faq__list">{faqNodes}</section>
    );
  }
}

export default FaqList;
