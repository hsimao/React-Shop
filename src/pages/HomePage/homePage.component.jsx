import React from 'react';
import './homePage.style.scss';

import Directory from '../../components/Directory/directory.component';

const HomePage = props => {
  return (
    <div className='homePage'>
      <Directory />
    </div>
  );
};

export default HomePage;
