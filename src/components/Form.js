import React from 'react';

class Form extends React.Component {

  state = {
    userFloor: '',
    direction: 'UP',
    destination: ''
  };

  onFloorChange = event => {
    this.setState({ userFloor : event.target.value });
  };

  onDestinationChange = event => {
    this.setState({ destination : event.target.value });
  };

  onDirectionChange = event => {
    this.setState({ direction : event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state);
  };

  render() {
    //console.log(this.state);
    return (
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="className=ui field">
          <label>User floor</label>
          <input onChange={this.onFloorChange} value={this.state.userFloor} type="number" placeholder="Current floor" />
        </div>

        <div className="className=ui field">
          <label>Direction</label>
          <input onChange={this.onDirectionChange} value={this.state.direction} type="text" />
        </div>

        <div className="className=ui field">
          <label>Destination</label>
          <input onChange={this.onDestinationChange} value={this.state.destination} type="number" />
        </div>

        <button className="ui button primary">Submit</button>

      </form>
    );
  }
}

export default Form;