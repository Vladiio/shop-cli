import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BooksFilter from './BooksFilter/BooksFilter';
import { loadItems } from '../../actions/items';

class HomePage extends Component {
  componentDidMount() {
    this.props.loadItems({});
  }

  // componentDidUpdate() {
  //   const { filterPhrase, loadItems } = this.props;
  //   loadItems(filterPhrase);
  // }

  render() {
    const {
      isLoading, items, nextPageUrl, loadItems,
    } = this.props;
    return (
      <Fragment>
        <h3>Books</h3>
        <BooksFilter />
        <ul>
          {items &&
            items.map(({ title, id, slug }) => (
              <li key={id}>
                <Link to={`/books/${slug}`}>{title}</Link>
              </li>
            ))}
        </ul>
        {nextPageUrl && <button onClick={() => loadItems({ nextPageUrl })}>Load more</button>}
      </Fragment>
    );
  }
}
const mapStateToProps = ({
  items: {
    allIds, byId, isLoading, nextPage, filterPhrase,
  },
}) => ({
  items: allIds && allIds.map(id => byId[id]),
  isLoading,
  nextPageUrl: nextPage,
  filterPhrase,
});

export default connect(
  mapStateToProps,
  { loadItems },
)(HomePage);
