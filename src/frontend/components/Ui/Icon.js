// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired
  }

  render() {
    const { type, className = '' } = this.props;
    const iconProps = {...this.props};

    delete iconProps.type;
    delete iconProps.className;

    return (
      <i className={`fa fa-${type} ${className}`} {...iconProps} />
    );
  }
}

export default Icon;
