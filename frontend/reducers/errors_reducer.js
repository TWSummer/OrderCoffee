import { RECEIVE_ERRORS, RECEIVE_ORDER, RECEIVE_ORDERS } from '../actions/order_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_ORDER:
      return [];
    case RECEIVE_ORDERS:
      return [];
    default:
      return state;
  }
};
