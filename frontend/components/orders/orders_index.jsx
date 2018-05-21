import React from 'react';

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

  render() {
    console.log(this.props);
    return (
      <section>
        <img src="https://i.imgur.com/EJMbREK.png" alt="logo"></img>
        Hello Theo
      </section>
    );
  }
}

export default OrdersIndex;
