import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default class UserInfoPage extends Component {
  render() {
    const { visited, viewedFull } = this.props;
    return (
      <div>
        <Navbar />
        <main className="maininfo">
          <h2>User Info</h2>
          {visited.length === 0 ?
          (<div className="no-results">
            <p>User has visited the following articles:</p>
            <p>No results yet</p>
          </div>)
          :
          (<ol>
            <p>User has visited the following articles:</p>
            {visited.map( (v) => (
              <li key={v.viewed}>
                <p>{`${v.viewed}`}</p>
                
              </li>
            ))}
          </ol>)}
          {viewedFull.length === 0 ?
          (<div className="no-results">
            <p>User has viewed the following full articles at Engagdet:</p>
            <p>No results yet</p>
          </div>)
          :
          (<ol>
              <p>User has viewed the following full articles at Engagdet:</p>
            {viewedFull.map( (vF) => (
              <li key={vF.fullArticle}>
                <p>{`${vF.fullArticle}`}</p>
              </li>
            ))}
          </ol>)}
        </main>
        <Footer />
      </div>
    );
  }
}