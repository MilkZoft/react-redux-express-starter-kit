// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';

class Link extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    refresh: PropTypes.bool,
    external: PropTypes.bool
  }

  render() {
    const { to, refresh = false, external = false } = this.props;
    const linkProps = {...this.props};
    let newTo = to;
    let newRefresh = refresh;

    if (to.charAt(0) === '/') {
      newTo = to.substring(1);
    } else if (to.indexOf('http') !== -1 || external) {
      newRefresh = true;
    }

    let newURL = `/${newTo}`;

    delete linkProps.dispatch;
    delete linkProps.refresh;
    delete linkProps.external;

    if (to === '/' || to.indexOf('http') !== -1 || external) {
      newURL = to;
    }

    if (newRefresh) {
      return <a href={newURL} {...linkProps} />;
    }

    return (
      <ReactRouterLink {...linkProps} to={newURL} />
    );
  }
}

export default Link;
