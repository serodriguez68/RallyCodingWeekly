import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// This is to allow containers to be rendered inside the modal and have
// propper connection to the redux store
import { store } from '../index';
import { Provider } from 'react-redux';

class Modal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  // this.props.children area all tags that where originally declared to be
  // nested inside the modal component
  //
  // Provider & store: allow containers to be rendered inside the modal and have
  // propper connection to the redux store
  _render() {
    ReactDOM.render(
      <Provider store={store}>
        <div>{this.props.children}</div>
      </Provider>,
      this.modalTarget
    );
  }

  // noscript es used as a hack to render nothing AT THE PLACE WHERE THE MODAL
  // COMPONENT WAS POSITIONED INSIDE THE APP COMPONENT.
  // We will use a workarund using componentDidMount and _render to put the content
  // on another position
  render() {
    return <noscript />;
  }
}

export default Modal;
