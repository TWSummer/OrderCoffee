import React from 'react';

class CreateOrderModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal" onClick={this.props.closeModal}>

      </div>
    );
  }
}

export default CreateOrderModal;
