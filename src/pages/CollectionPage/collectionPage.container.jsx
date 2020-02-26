import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/WithSpinner/withSpinner.component';
import CollectionPage from './collectionPage.component';

const mapStateTopProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionPageContainer = compose(
  connect(mapStateTopProps),
  WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;
