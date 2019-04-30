import React from 'react';
import Navbar from './Navbar';
import UserTable from './UserTable';
import Footer from './Footer';

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

export default UserInfoPage;