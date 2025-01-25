import React, { JSX, useState } from 'react';
import UsernameList from './usernamesList';
import UserDetails from './userDetails';

// Define the type for the pages
type Page = 'list' | 'details';

const condRenderHome = () => {
  const [page, setPage] = useState<Page>('list');  // 'list' or 'details'
  const [selectedUser, setSelectedUser] = useState<string>('');

  const handleUserClick = (username: string): void => {
    setSelectedUser(username);
    setPage('details');
  };

  const handleBackToList = (): void => {
    setPage('list');
  };

  const renderPage = (): JSX.Element => {
    switch (page) {
      case 'list':
        return <UsernameList onUserClick={handleUserClick} />;
      case 'details':
        return <UserDetails username={selectedUser} onBack={handleBackToList} />;
      default:
        return <UsernameList onUserClick={handleUserClick} />;
    }
  };

  return <div>{renderPage()}</div>;
};

export default condRenderHome;
