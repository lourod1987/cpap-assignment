import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const Lost = () => {
  return (
  <React.Fragment>
    <Navbar />
      <main>
        <h1 className="lost-message">
          You've accessed Technology that doesn't exist yet!!! Go back to our homepage to read the latest on Tech!
        </h1>
        <Link to="/">
          <button className="lost-btn">Take me to the Latest Articles</button>
        </Link>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Lost;
