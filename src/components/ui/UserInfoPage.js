import React from 'react';
import Navbar from './Navbar';
import UserTable from './UserTable';
import Footer from './Footer';
import PropTypes from 'prop-types';

const UserInfoPage = props => {
  const { articlesTable } = props;
  return (
    <React.Fragment>
      <Navbar />
      <main className="maininfo">
        <h2>User Info</h2>
        <UserTable articlesTable={articlesTable} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

UserInfoPage.propTypes = {
  articlesTable: PropTypes.array.isRequired
}

export default UserInfoPage;