import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadItems } from '../../actions/items';

class HomePage extends Component {
  componentWillMount() {
    this.props.loadItems();
  }

  render() {
    const { items } = this.props;
    if (this.props.isLoading) return <p>Loading..</p>;
    return (
      <Fragment>
        <h3>Books</h3>
        <ul>
          {items &&
            items.map(({ title, id, slug }) => (
              <li key={id}>
                <Link to={`/books/${slug}`}>{title}</Link>
              </li>
            ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ items: { allIds, byId, isLoading } }) => ({
  items: allIds && allIds.map(id => byId[id]),
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadItems()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
