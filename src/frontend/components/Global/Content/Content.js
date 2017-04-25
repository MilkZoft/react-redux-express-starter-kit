// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="Content">
        <div className="wrapper">
          {children}
        </div>
      </div>
    );
  }
}

export default Content;
