import React from 'react';
import ButtonCustom from '../ButtonCustom/buttonCustom.component';

import classes from './collectionItem.module.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className={classes.collectionItem}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className={classes['collection-footer']}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{price}</span>
      </div>
      <ButtonCustom inverted>Add to cart</ButtonCustom>
    </div>
  );
};

export default CollectionItem;
