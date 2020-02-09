import React from 'react';
import classes from './homePage.module.scss';

import Directory from '../../components/Directory/directory.component';

const HomePage = props => {
  return (
    <div className={classes.homePage}>
      <Directory />
    </div>
  );
};

export default HomePage;
