import React from 'react';
import MainBanner from '../components/MainBanner';
import Introduction from '../components/Introduction';
import MainAbout from '../components/MainAbout';

const Home = () => {
  return (
    <>
      <MainBanner />
      <Introduction />
      <MainAbout />
    </>
  );
};

export default Home;