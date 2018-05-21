import * as APIUtil from '../util/order_util';

export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders
});

const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchOrders = (page, sortType, sort) => dispatch => (
  APIUtil.fetchOrders(page, sortType, sort)
    .then(
      orders => dispatch(receiveOrders(orders)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);


export const createOrder = formOrder => dispatch => (
  APIUtil.createOrder(formOrder)
    .then(
      order => dispatch(receiveOrder(order)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);
