import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src="" alt=""/>
          <Link to="/" className="site-name"><h1>TechAgg</h1></Link>
          {/* <input type="text"  placeholder="Search"/> */}
          <Link to="/userinfo" className="link">User Info</Link>
        </nav>
      </header>
    );
  }
}