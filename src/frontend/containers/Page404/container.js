// Dependencies
import React, { Component } from 'react';

class Page404 extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className="Page404">
        <h1>404 - Page Not Found</h1>
        <p>Go Back</p>
      </div>
    );
  }
}

export default Page404;
