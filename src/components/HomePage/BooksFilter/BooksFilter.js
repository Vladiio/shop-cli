import React from 'react';
import { connect } from 'react-redux';
import { updateBooksFilterPhrase } from '../../../actions/items';

const BooksFilter = ({ filterPhrase, onFilterChange }) => (
  <input onChange={e => onFilterChange(e.target.value)} value={filterPhrase} type="text" />
);

const mapStateToProps = ({ items: { filterPhrase } }) => ({ filterPhrase });
// const mapDispatchToProps = dispatch => ({ updateBooksFilterPhrase });

export default connect(
  mapStateToProps,
  { onFilterChange: updateBooksFilterPhrase },
)(BooksFilter);
