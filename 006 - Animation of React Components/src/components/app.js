import _ from 'lodash';
import React, { Component } from 'react';
import Faker from 'faker';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = { quotes: [] };
  }

  onAddClick() {
    const quote = Faker.lorem.sentence();
    this.setState({ quotes: [ ...this.state.quotes, quote ]});
  }

  onRemoveClick(quote) {
    this.setState({ quotes: _.without(this.state.quotes, quote) });
  }

  renderQuotes() {
    return this.state.quotes.map((item, index) => {
      return (
        <li className="list-group-item" key={item}>
          {item}
          <button onClick={this.onRemoveClick.bind(this, item)} className="remove btn btn-danger">Remove</button>
        </li>
      );
    });
  }

  render() {
    // Defines all teh properties for the ReactCSSTransitionGroup component.
    // They may also be defined on the component itself as props
    // The tansitionName prop defines how you will need to name the css classes
    // (take a look at style.css)
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };

    // ReactCSSTransitionGroup is a component like any other.
    // It is used to add an remove items from lists
    return (
      <div>
        <button onClick={this.onAddClick.bind(this)}>Add</button>
        <ul className="list-group">
          <ReactCSSTransitionGroup {...transitionOptions}>
            {this.renderQuotes()}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}
