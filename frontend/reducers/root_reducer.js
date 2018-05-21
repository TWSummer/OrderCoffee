import { combineReducers } from 'redux';
import ordersReducer from './orders_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  orders: ordersReducer,
  errors: errorsReducer
});

export default rootReducer;
