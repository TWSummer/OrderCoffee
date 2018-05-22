import React from 'react';
import OrderItem from './order_item';

class OrdersIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      sortType: "ship_date",
      sort: "DESC"
    };
  }

  componentDidMount() {
    this.props.fetchOrders(this.state.page, this.state.sortType, this.state.sort);
  }

  getMonth() {
    let now = new Date(Date.now());
    return now.toDateString().split(" ")[1];
  }

  getDay() {
    let now = new Date(Date.now());
    return now.toDateString().split(" ")[2];
  }

  render() {
    console.log(this.props);
    return (
      <section>
        <img src="https://i.imgur.com/EJMbREK.png" alt="logo"></img>
        <header className="page-header">
          <div className="today-date">
            <span className="month">{this.getMonth()}</span>
            <span className="day">{this.getDay()}</span>
          </div>
          <h1>Perfectly Ground Work Orders</h1>
          <button>Create Order</button>
        </header>
        <main className="orders-table">
          <header className="table-header">
            <span className="blue-header">Orders</span>
            <span className="column-labels">
              <div>Coffee</div>
              <div>Method</div>
              <div>Quantity</div>
              <div>Unit</div>
              <div>Ship Date</div>
              <div>Order</div>
              <div>View</div>
            </span>
          </header>
          <div>
            {
              this.props.orders.map((order) => {
                return (
                  <OrderItem order={order}></OrderItem>
                );
              })
            }
          </div>
        </main>
      </section>
    );
  }
}

export default OrdersIndex;
