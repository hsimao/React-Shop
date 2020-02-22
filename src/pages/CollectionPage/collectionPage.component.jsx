import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/CollectioItem/collectionItem.component';

import classes from './collectionPage.module.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className={classes.collectionPage}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.items}>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
