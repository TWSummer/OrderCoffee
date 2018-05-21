import { Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import OrdersContainer from './orders/orders_container';



const App = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={OrdersContainer} />
    </Switch>
  </div>
);

export default App;
