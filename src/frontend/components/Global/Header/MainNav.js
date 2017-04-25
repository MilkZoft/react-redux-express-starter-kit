// Dependencies
import React, { Component } from 'react';

// Utils
import { setClass } from '../../../../lib/utils/frontend';

// Components
import BaseComponent from '../../BaseComponent';
import Icon from '../../Ui/Icon';
import Link from '../../Ui/Link';

class MainNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    const hiddenClass = setClass(this.state.showMenu, '', ' hidden');

    return (
      <nav className="MainNav">
        <div className="toggle">
          <Link to="#" onClick={this.handleToggleClick}>
            <Icon type="bars" />
          </Link>
        </div>

        <ul className="desktop">
          <li key="1"><Link to="#"><Icon type="caret-right" /> Option 1</Link></li>
          <li key="2"><Link to="#"><Icon type="caret-right" /> Option 2</Link></li>
          <li key="3"><Link to="#" refresh><Icon type="caret-right" /> Option 3</Link></li>
          <li key="4"><Link to="#" refresh><Icon type="caret-right" /> Option 4</Link></li>
        </ul>

        <ul className={`mobile${hiddenClass}`}>
          <li key="5"><Link to="#"><Icon type="caret-right" /> Option 1</Link></li>
          <li key="6"><Link to="#"><Icon type="caret-right" /> Option 2</Link></li>
          <li key="7"><Link to="#" refresh><Icon type="caret-right" /> Option 3</Link></li>
          <li key="8"><Link to="#" refresh><Icon type="caret-right" /> Option 4</Link></li>
        </ul>
      </nav>
    );
  }
}

MainNav = BaseComponent(MainNav);

export default MainNav;
