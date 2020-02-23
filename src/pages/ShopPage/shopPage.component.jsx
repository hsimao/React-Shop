import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/collectionsOverview.component';
import CollectionPage from '../CollectionPage/collectionPage.component';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import classes from './shopPage.module.scss';

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className={classes.shopPage}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
