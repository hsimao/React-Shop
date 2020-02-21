import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import classes from './directory.module.scss';

import MenuItem from '../MenuItem/menuItem.component';

const Directory = ({ sections }) => (
  <div className={classes.directory}>
    {/* 若傳遞的 props 與變數相同名稱, 可直接用解構方式 */}
    {sections.map(({ id, ...allProps }) => (
      <MenuItem key={id} {...allProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
