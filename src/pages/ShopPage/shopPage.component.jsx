import React from 'react';

import CollectionsOverview from '../../components/CollectionsOverview/collectionsOverview.component';

import classes from './shopPage.module.scss';

const ShopPage = () => (
  <div className={classes.shopPage}>
    <CollectionsOverview />
  </div>
);

export default ShopPage;
