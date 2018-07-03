import * as booksTypes from './constants';

const baseUrl = '';

const loadItemsRequest = () => dispatch => dispatch({ type: booksTypes.LOAD_ITEMS_REQUEST });

const loadItemsFailure = error => dispatch =>
  dispatch({ type: booksTypes.LOAD_ITEMS_FAILURE, error });

const loadItemsSuccess = items => dispatch =>
  dispatch({ type: booksTypes.LOAD_ITEMS_SUCCESS, items });

export const loadItems = ({ nextPageUrl, filterPhrase = '' }) => (dispatch) => {
  dispatch(loadItemsRequest());
  const url = nextPageUrl || `${baseUrl}/api/books/?filter=${filterPhrase}`;
  return fetch(url)
    .then(response => response.json())
    .then((items) => {
      dispatch(loadItemsSuccess(items));
    })
    .catch(error => dispatch(loadItemsFailure(error)));
};
export const loadItem = slug => (dispatch) => {
  dispatch(loadItemsRequest());
  fetch(`${baseUrl}/api/books/${slug}`)
    .then(response => response.json())
    .then(book => dispatch({ type: booksTypes.LOAD_ITEM, payload: book }));
};

export const updateBooksFilterPhrase = filterPhrase => (dispatch) => {
  dispatch({ type: booksTypes.UPDATE_BOOKS_FILTER_PHRASE, filterPhrase });
  dispatch(loadItems({ filterPhrase }));
};
