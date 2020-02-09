import React, { Component } from 'react';
import classes from './shopPage.module.scss';
import SHOP_DATA from './shopPage.data';

import CollectionPreview from '../../components/CollectionPreview/collectionPreview.component';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className={classes.shopPage}>
        {collections.map(({ id, ...propsAll }) => (
          <CollectionPreview key={id} {...propsAll} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
