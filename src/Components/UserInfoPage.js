import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default class UserInfoPage extends Component {

  render() {
    let x = 0;
    let i = -1;
    const { visited } = this.props;
    return (
      <div>
        <Navbar />
        <main className="maininfo">
         <h2>User Info</h2>
          {visited.length === 0 ?
          (<p className="no-results">No results yet</p>)
          :(<table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Article Title</th>
                  <th>Visited Article Page</th>
                  <th>Seen Full Article on Engagdet</th>
                </tr>
              </thead>
              <tbody>
                {visited.map( (v) => (
                <tr key={`${v.viewed}&${i+=1}`}>
                  <td>{x+=1}</td>
                  <td>{v.viewed}</td>
                  <td>{v.seen}</td>
                  <td>{v.fullArticle}</td>
                </tr>
                ))}
              </tbody>
          </table>)}
        </main>
        <Footer />
      </div>
    );
  }
}