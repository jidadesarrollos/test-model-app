import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {

  render() {
    return (
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/settings'>settings</Link></li>
      </ul>
    );
  }
}

export default Navigation;