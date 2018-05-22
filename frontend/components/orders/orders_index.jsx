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
    this.setSort = this.setSort.bind(this);
  }

  componentDidMount() {
    this.props.fetchOrders(this.state.page, this.state.sortType, this.state.sort);
  }

  getMonth() {
    let now = new Date(Date.now());
    return now.toDateString().split(" ")[1].toUpperCase();
  }

  getDay() {
    let now = new Date(Date.now());
    return now.toDateString().split(" ")[2];
  }

  sortIcon(type) {
    if (type === this.state.sortType) {
      if (this.state.sort === "DESC") {
        return <i class="fas fa-sort-amount-down"></i>;
      } else {
        return <i class="fas fa-sort-amount-up"></i>;
      }
    }
    return "";
  }

  setSort(type) {
    return (e) => {
      let newSort;
      if (type === this.state.sortType) {
        if (this.state.sort === "DESC") {
          newSort = "ASC";
        } else {
          newSort = "DESC";
        }
      } else {
        newSort = "DESC";
      }
      this.props.fetchOrders(this.state.page, type, newSort);
      this.setState({ sortType: type, sort: newSort });
    };
  }

  pageNumbers() {
    let min = this.state.page - 2;
    let max = this.state.page + 2;
    let pageLimit = (this.props.count - 1) / 25 + 1;
    if (min < 1) {
      max = max + 1 - min;
      min = 1;
    }
    if (max > pageLimit) {
      min = min - max + pageLimit;
      max = pageLimit;
    }
    if (min < 1) {
      min = 1;
    }
    let pageNums = [];
    for (let i = min; i <= max; i++) {
      pageNums.push(i);
    }
    return pageNums;
  }

  render() {
    return (
      <section>
        <img src="https://i.imgur.com/EJMbREK.png" alt="logo"></img>
        <header className="page-header">
          <div className="today-date">
            <span className="month">{this.getMonth()}</span>
            <span className="day">{this.getDay()}</span>
          </div>
          <h1>Perfectly Ground Work Orders</h1>
          <button>CREATE ORDER</button>
        </header>
        <main className="orders-table">
          <header className="table-header">
            <span className="blue-header">ORDERS</span>
            <span className="column-labels">
              <div className="cof"
                onClick={this.setSort("coffee_name")}>
                Coffee
                {this.sortIcon("coffee_name")}
              </div>
              <div className="met"
                onClick={this.setSort("method")}>
                Method
                {this.sortIcon("method")}
              </div>
              <div className="qua"
                onClick={this.setSort("quantity")}>
                Quantity
                {this.sortIcon("quantity")}
              </div>
              <div className="unit"
                onClick={this.setSort("unit")}>
                Unit
                {this.sortIcon("unit")}
              </div>
              <div className="ship"
                onClick={this.setSort("ship_date")}>
                Ship Date
                {this.sortIcon("ship_date")}
              </div>
              <div className="order"
                onClick={this.setSort("id")}>
                Order
                {this.sortIcon("id")}
              </div>
              <div className="view">
                View
              </div>
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
        <footer className="page-numbers">
          <div className="page-select">
            <i class="fas fa-angle-double-left"></i>
          </div>
          <div className="page-select">
            Prev
          </div>
          {
            this.pageNumbers().map((num) => {
              return (
                <div className="page-select">
                  {num}
                </div>
              );
            })
          }
          <div className="page-select">
            Next
          </div>
          <div className="page-select">
            <i class="fas fa-angle-double-right"></i>
          </div>
        </footer>
      </section>
    );
  }
}

export default OrdersIndex;
