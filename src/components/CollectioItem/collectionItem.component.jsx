import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import ButtonCustom from '../ButtonCustom/buttonCustom.component';

import classes from './collectionItem.module.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className={classes.collectionItem}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className={classes['collection-footer']}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{price}</span>
      </div>
      <ButtonCustom onClick={() => addItem(item)} inverted>
        Add to cart
      </ButtonCustom>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
