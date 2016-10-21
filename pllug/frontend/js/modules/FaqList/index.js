import React, { Component, PropTypes } from 'react';
import { Container } from 'flux/utils';
import FaqItem from '../FaqItem';
import FaqStore from './stores';
import { loadFaqItems } from './actions';


class FaqList extends Component {
  componentWillMount() {
    loadFaqItems();
  }

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
      return <FaqItem item={faqItems[key]} key={key} />;
    });
    return (
      <section className="qa__list">{faqNodes}</section>
    );
  }
}

export default Container.create(FaqList);
