import React from 'react';
import Navbar from './Navbar';
import UserTable from './UserTable';
import Footer from './Footer';

const UserInfoPage = props => {
  const { visited } = props;
  return (
    <React.Fragment>
      <Navbar />
      <main className="maininfo">
        <h2>User Info</h2>
        <UserTable visited={visited} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default UserInfoPage;