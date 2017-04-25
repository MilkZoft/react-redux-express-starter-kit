// Dependencies
import React, { Component } from 'react';

// Components
import Logo from './Logo';
import MainNav from './MainNav';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="wrapper">
          <Logo />
          <MainNav />
        </div>
      </div>
    );
  }
}

export default Header;
