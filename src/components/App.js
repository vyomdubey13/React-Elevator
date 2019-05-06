import React from 'react';
import Form from './Form';
import Status from './Status';


class App extends React.Component {

  state = { userFloor:'', destination:'', direction:'' };

  onFormSubmit = ({ userFloor, destination, direction }) => {

    this.setState({ 
     userFloor,
     destination,
     direction
    });

  };

  render() {
    return (
      <div className="ui container">
        <Form onFormSubmit={this.onFormSubmit}/>
        <Status 
          userFloor={Number(this.state.userFloor)}
          destination={this.state.destination}
          direction={this.state.direction}
        />
      </div>
    );
  }
}

export default App;