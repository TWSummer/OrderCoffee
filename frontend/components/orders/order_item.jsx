import React from 'react';

class OrderItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { order } = this.props;
    return (
      <span>
        <div>{order.coffee_name}</div>
        <div>{order.method}</div>
        <div>{order.quantity}</div>
        <div>{order.unit}</div>
        <div>{order.ship_date}</div>
        <div>{order.id}</div>
        <div></div>
      </span>
    );
  }
}

export default OrderItem;
