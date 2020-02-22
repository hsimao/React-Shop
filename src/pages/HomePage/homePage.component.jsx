import React from 'react';
import { HomePageContainer } from './homePage.styles';

import Directory from '../../components/Directory/directory.component';

const HomePage = props => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
