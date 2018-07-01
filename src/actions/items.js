import * as booksTypes from './constants';

const loadItemsRequest = () => dispatch => dispatch({ type: booksTypes.LOAD_ITEMS_REQUEST });

const loadItemsFailure = error => dispatch =>
  dispatch({ type: booksTypes.LOAD_ITEMS_FAILURE, error });

const loadItemsSuccess = items => dispatch =>
  dispatch({ type: booksTypes.LOAD_ITEMS_SUCCESS, items });

export const loadItems = () => (dispatch) => {
  dispatch(loadItemsRequest());
  return fetch('/api/books/')
    .then(response => response.json())
    .then((items) => {
      dispatch(loadItemsSuccess(items.results));
    })
    .catch(error => dispatch(loadItemsFailure(error)));
};
export const loadItem = slug => (dispatch) => {
  dispatch(loadItemsRequest());
  fetch(`/api/books/${slug}`)
    .then(response => response.json())
    .then(book => dispatch({ type: booksTypes.LOAD_ITEM, payload: book }));
};
