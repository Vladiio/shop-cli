import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadItem } from '../../actions/items';

class BookDetailPage extends Component {
  componentDidMount() {
    this.props.loadBook();
  }
  render() {
    const { book, isLoading } = this.props;
    if (isLoading || (!book || !book.author)) return null;
    return (
      <div>
        <h1>{book.title}</h1>
        <p>Author: {book.author.name}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ items: { byId, isLoading } }, { match: { params } }) => ({
  book: byId && byId[params.slug],
  isLoading,
});

const mapDispatchToProps = (dispatch, { match: { params } }) => ({
  loadBook: () => dispatch(loadItem(params.slug)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookDetailPage);
