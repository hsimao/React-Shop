import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopItems } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/CollectionPreview/collectionPreview.component';

import classes from './shopPage.module.scss';

const ShopPage = ({ collections }) => (
  <div className={classes.shopPage}>
    {collections.map(({ id, ...propsAll }) => (
      <CollectionPreview key={id} {...propsAll} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapStateToProps)(ShopPage);
