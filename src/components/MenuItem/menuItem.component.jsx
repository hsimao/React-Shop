import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './menuItem.module.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      className={`${classes.menuItem} ${size ? classes[size] : ''}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className={classes['menuItem-bg']}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes.content}>
        <h1 className={classes.title}>{title.toUpperCase()}</h1>
        <span className={classes.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
