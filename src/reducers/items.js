import * as booksTypes from '../actions/constants';

const initalState = { allIds: [], filterPhrase: '' };

export default (state = initalState, action) => {
  switch (action.type) {
    case booksTypes.LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        byId: action.items.results.reduce((accumulator, { id, title, slug }) => {
          accumulator[slug] = { title, id, slug };
          return accumulator;
        }, state.byId || {}),
        allIds: [...action.items.results.map(({ slug }) => slug)],
        nextPage: action.items.next,
        isLoading: false,
      };
    case booksTypes.LOAD_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case booksTypes.LOAD_ITEMS_FAILURE:
      return {
        error: action.error,
      };
    case booksTypes.LOAD_ITEM:
      return {
        ...state,
        byId: { ...state.byId, [action.payload.slug]: action.payload },
        isLoading: false,
      };
    case booksTypes.UPDATE_BOOKS_FILTER_PHRASE:
      return {
        ...state,
        filterPhrase: action.filterPhrase,
      };
    default:
      return state;
  }
};
