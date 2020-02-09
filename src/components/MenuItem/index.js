import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      className={`menuItem ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className='menuItem-bg'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
