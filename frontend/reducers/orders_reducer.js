import merge from 'lodash/merge';
import { RECEIVE_ORDER, RECEIVE_ORDERS } from '../actions/order_actions';

const ordersReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ORDERS:
      return action.orders;
    case RECEIVE_ORDER:
      return state;
    default:
      return state;
  }
};

export default ordersReducer;
