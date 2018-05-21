import OrdersIndex from './orders_index';
import { connect } from 'react-redux';
import { fetchOrders, createOrder } from '../../actions/order_actions';

const mapStateToProps = (state, ownProps) => {

  return ({
    orders: state.orders,
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchOrders: (page, sortType, sort) => dispatch(fetchOrders(page, sortType, sort)),
    createOrder: order => dispatch(createOrder(order))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersIndex);
