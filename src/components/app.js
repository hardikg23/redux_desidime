import React from 'react';
import { Component } from 'react';
import Nav from './nav';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
