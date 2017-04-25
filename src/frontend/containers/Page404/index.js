// Dependencies
import React, { Component } from 'react';

// Main Container
import Page404 from './container';

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
          <Page404 {...this.props} />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Main;
