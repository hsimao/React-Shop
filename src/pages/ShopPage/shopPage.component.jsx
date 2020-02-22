import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/collectionsOverview.component';
import CollectionPage from '../CollectionPage/collectionPage.component';

import classes from './shopPage.module.scss';

const ShopPage = ({ match }) => (
  <div className={classes.shopPage}>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
