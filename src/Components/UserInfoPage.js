import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default class UserInfoPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="maininfo">
          <h2>User Info</h2>
          <p>User has visited the following articles:</p>
          <p>Temp display of articles tracked</p>

          <p>User has viewed the following full articles at engadget site:</p>
          <p>Temp display of tracked clicks on external article link</p>
        </main>
        <Footer />
      </div>
    );
  }
}