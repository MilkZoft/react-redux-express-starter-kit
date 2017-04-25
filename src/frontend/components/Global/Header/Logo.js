// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Link from '../../Ui/Link';

class Logo extends Component {
  static propTypes = {
    refresh: PropTypes.bool
  };

  render() {
    const { refresh = false } = this.props;

    return (
      <div className="Logo">
        <Link to="/" title="Codejobs" refresh={refresh}>
          <span className="text">
            <span className="code">CODE</span>
            <span className="jobs">JOBS</span>
          </span>
        </Link>
      </div>
    );
  }
}

export default Logo;
