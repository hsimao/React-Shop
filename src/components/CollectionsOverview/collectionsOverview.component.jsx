import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';

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
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
