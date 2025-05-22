import React from 'react';
import MainBanner from '../components/MainBanner';
import Introduction from '../components/Introduction';
import MainAbout from '../components/MainAbout';
import MainWorks from '../components/MainWorks';
import MainNews from '../components/MainNews';
import MainContact from '../components/MainContact';
import MainFooter from '../components/MainFooter';

const Home = () => {
  return (
    <>
      <MainBanner />
      <Introduction />
      <MainAbout />
      <MainWorks />
      <MainNews />
      <MainContact/>
      <MainFooter />
    </>
  );
};

export default Home;