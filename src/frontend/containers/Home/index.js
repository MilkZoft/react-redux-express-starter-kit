// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Main Container
import Home from './container';

// Global Components
import Content from '../../components/Global/Content/Content';
import Footer from '../../components/Global/Footer/Footer';
import Header from '../../components/Global/Header/Header';

class Main extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content>
          <Home {...this.props} />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Main;
