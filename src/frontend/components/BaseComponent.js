// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function baseComponent(Wrapper) {
  class BaseComponent extends Component {
    render() {
      return <Wrapper {...this.props} />;
    }
  }

  BaseComponent = connect(state => ({
    isMobile: state.device.isMobile
  }), null)(BaseComponent);

  return BaseComponent;
}
