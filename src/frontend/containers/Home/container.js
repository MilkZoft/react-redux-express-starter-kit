// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import BaseComponent from '../../components/BaseComponent';
import Welcome from '../../components/Home/Welcome';

class Home extends Component {
  static propTypes = {
    isMobile: PropTypes.bool
  };

  render() {
    const {
      isMobile
    } = this.props;

    return (
      <div className={`Home ${isMobile ? 'mobile' : ''}`}>
        <Welcome />
      </div>
    );
  }
}

Home = BaseComponent(Home);

export default Home;
