import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../CollectionPreview/collectionPreview.component';

import classes from './collectionsOverview.module.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className={classes.collectionsOverview}>
      {collections.map(({ id, ...propsAll }) => (
        <CollectionPreview key={id} {...propsAll} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
