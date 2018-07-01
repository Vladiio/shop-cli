import * as booksTypes from '../actions/constants';

export default (state = {}, action) => {
  switch (action.type) {
    case booksTypes.LOAD_ITEMS_SUCCESS:
      return {
        byId: action.items.reduce((accumulator, { id, title, slug }) => {
          accumulator[slug] = { title, id, slug };
          return accumulator;
        }, {}),
        allIds: action.items.map(({ slug }) => slug),
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
    default:
      return state;
  }
};
