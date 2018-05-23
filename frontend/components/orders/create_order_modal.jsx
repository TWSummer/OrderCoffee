import React from 'react';

class CreateOrderModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffee_name: "Choose One",
      method: "Choose One",
      unit: "Choose One",
      priority: false
    };
    this.updateName = this.updateName.bind(this);
    this.updateMethod = this.updateMethod.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.updateUnit = this.updateUnit.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
    this.updatePriority = this.updatePriority.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  updateName(e) {
    this.setState({ coffee_name: e.target.value });
  }

  updateMethod(e) {
    this.setState({ method: e.target.value });
  }

  updateDate(e) {
    this.setState({ ship_date: e.target.value });
  }

  updateQuantity(e) {
    this.setState({ quantity: e.target.value });
  }

  updateUnit(e) {
    this.setState({ unit: e.target.value });
  }

  updateNotes(e) {
    this.setState({ notes: e.target.value });
  }

  updatePriority(e) {
    this.setState({ priority: e.target.checked });
  }

  submitOrder(e) {
    this.props.createOrder(this.state).then(
      () => this.props.closeModal()
    ).then(
      () => this.props.fetchOrders()
    );
  }

  render() {
    return (
      <div className="modal" onClick={this.props.closeModal}>
        <main className="modal-main" onClick={(e) => e.stopPropagation()}>
          <i class="fas fa-times" onClick={this.props.closeModal}></i>
          <h1>Perfectly Ground Work Orders</h1>
          <h3>Instructional text would go here -- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
          <span className="input-row">
            <label className="name-select">Coffee<p className="red">*</p><br></br>
              <select
                className="select"
                value={this.state.coffee_name}
                onChange={this.updateName}>
                <option value="Choose One" disabled>Choose One</option>
                <option value="Bella Donovan">Bella Donovan</option>
                <option value="Giant Steps">Giant Steps</option>
              </select>
            </label>
            <label className="method-select">Brew Method<p className="red">*</p><br></br>
              <select
                className="select"
                value={this.state.method}
                onChange={this.updateMethod}>
                <option value="Choose One" disabled>Choose One</option>
                <option value="Aeropress">Aeropress</option>
                <option value="Coffee Maker">Coffee Maker</option>
                <option value="Cold Brew">Cold Brew</option>
                <option value="French Press">French Press</option>
                <option value="Pour Over">Pour Over</option>
              </select>
            </label>
          </span>
          <span className="input-row">
            <label className="date-input">Ship Date<p className="red">*</p><br></br>
              <input type="date"
                value={this.state.ship_date}
                onChange={this.updateDate}>
              </input>
            </label>
            <label className="quantity-input">Quantity<p className="red">*</p><br></br>
              <input type="number"
                min="1"
                value={this.state.quantity}
                onChange={this.updateQuantity}>
              </input>
            </label>
            <label className="unit-select">Unit<p className="red">*</p><br></br>
              <select
                className="select"
                value={this.state.unit}
                onChange={this.updateUnit}>
                <option value="Choose One" disabled>Choose One</option>
                <option value="50">50 Case</option>
                <option value="25">25 Case</option>
              </select>
            </label>
          </span>
          <span className="input-row">
            <label className="notes-input">Notes
              <input type="text"
                className="notes"
                value={this.state.notes}
                onChange={this.updateNotes}>
              </input>
            </label>
          </span>
          <input type="checkbox"
            id="priority-check"
            value={this.state.priority}
            onChange={this.updatePriority}>
          </input>
          <label for="priority-check">Priority</label>
          <br></br>
          <button onClick={this.submitOrder}>SUBMIT WORK ORDER</button>
          {this.props.errors[0]}
        </main>
      </div>
    );
  }
}

export default CreateOrderModal;
