import React from 'react';
import Introduction from '../components/Home/Introduction';
import MainAbout from '../components/Home/MainAbout';
import MainBanner from '../components/Home/MainBanner';
import MainContact from '../components/Home/MainContact';
import MainFooter from '../components/Home/MainFooter';
import MainNews from '../components/Home/MainNews';
import MainWorks from '../components/Home/MainWorks';

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
