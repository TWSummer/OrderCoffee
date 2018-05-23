import React from 'react';
import OrderItem from './order_item';
import CreateOrderModal from './create_order_modal';

class OrdersIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      sortType: "ship_date",
      sort: "DESC",
      modal: false
    };
    this.setSort = this.setSort.bind(this);
    this.setPage = this.setPage.bind(this);
    this.setModal = this.setModal.bind(this);
    this.fetchOrders = this.fetchOrders.bind(this);
  }

  componentDidMount() {
    this.fetchOrders();
  }

  fetchOrders() {
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

  maxPage() {
    return Math.floor((this.props.count - 1) / 25 + 1);
  }

  pageNumbers() {
    let min = this.state.page - 2;
    let max = this.state.page + 2;
    let pageLimit = this.maxPage();
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

  setPage(num) {
    if (num < 1) {
      num = 1;
    }
    if (num > this.maxPage()) {
      num = this.maxPage();
    }
    return (e) => {
      this.props.fetchOrders(num, this.state.sortType, this.state.sort);
      this.setState({ page: num });
    };
  }

  setModal(bool) {
    return (e) => {
      this.setState({ modal: bool });
    };
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
          <button onClick={this.setModal(true)}>CREATE ORDER</button>
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
          <div className="page-select"
            onClick={this.setPage(1)}>
            <i class="fas fa-angle-double-left"></i>
          </div>
          <div className="page-select"
            onClick={this.setPage(this.state.page - 1)}>
            Prev
          </div>
          {
            this.pageNumbers().map((num) => {
              let active = this.state.page === num ? "active" : "";
              return (
                <div className={`page-select ${active}`}
                  onClick={this.setPage(num)}>
                  {num}
                </div>
              );
            })
          }
          <div className="page-select"
            onClick={this.setPage(this.state.page + 1)}>
            Next
          </div>
          <div className="page-select final-select"
            onClick={this.setPage(this.maxPage())}>
            <i class="fas fa-angle-double-right"></i>
          </div>
        </footer>
        {
          this.state.modal ?
          <CreateOrderModal
            closeModal={this.setModal(false)}
            createOrder={this.props.createOrder}
            errors={this.props.errors}
            fetchOrders={this.fetchOrders}>
          </CreateOrderModal> :
          ""
        }
      </section>
    );
  }
}

export default OrdersIndex;
