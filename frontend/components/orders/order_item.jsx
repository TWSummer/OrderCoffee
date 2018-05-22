import React from 'react';

class OrderItem extends React.Component {
  constructor(props) {
    super(props);
  }

  formatDate(date) {
    let dateParts = date.split("-");
    return dateParts[1] + "/" + dateParts[2] + "/" + dateParts[0];
  }

  formatOrder(num) {
    num = num.toString();
    while (num.length < 5) {
      num = "0" + num;
    }
    return "#" + num;
  }

  addStar(order) {
    if (order.priority) {
      return <i class="fas fa-star"></i>;
    }
    return "";
  }

  render() {
    let { order } = this.props;
    return (
      <span className="table-row">
        <div className="cof">{order.coffee_name}</div>
        <div className="met">{order.method}</div>
        <div className="qua">{order.quantity}</div>
        <div className="unit">{order.unit}</div>
        <div className="ship">
          {this.formatDate(order.ship_date)}
          {this.addStar(order)}
        </div>
        <div className="order">{this.formatOrder(order.id)}</div>
        <div className="view">f</div>
      </span>
    );
  }
}

export default OrderItem;
