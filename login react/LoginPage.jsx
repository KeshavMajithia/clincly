import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

const LoginPage = () => {
  return (
    <div className="flex overflow-hidden flex-col px-20 pt-8 pb-48 bg-white max-md:px-5 max-md:pb-24">
      <Header />
      <MainContent />
    </div>
  );
};

export default LoginPage;