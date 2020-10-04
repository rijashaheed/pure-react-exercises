import React from "react";

function Child({ onAction, onReset }) {
  return (
    <div>
      <button onClick={onAction}>Click Me!</button>
      <button onClick={onReset}>Reset count</button>
    </div>
  );
}

class CountingParent extends React.Component {
  // The constructor is called when a
  // component is created
  constructor(props) {
    super(props);
    // Set the state here. Use "props" if needed.
    this.state = {
      actionCount: 0,
    };

    // Bind the event handler function, so that its
    // `this` binding isn't lost when it gets passed
    // to the button
    this.handleAction = this.handleAction.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  //method
  handleAction(action) {
    console.log("Child says", action);
    //Replace actionCount with an incremented value
    this.setState({
      actionCount: this.state.actionCount + 1,
    });
  }

  //method to reset
  handleReset(action1) {
    console.log("reset says", action1);
    this.setState({
      actionCount: 0,
    });
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} onReset={this.handleReset} />
        <p> Clicked {this.state.actionCount} times </p>
      </div>
    );
  }
}

const Page = () => {
  return (
    <>
      <CountingParent />
      <CountingParent />
    </>
  );
};

class House extends React.Component {
  state = {
    kitchen: true,
    bathroom: false,
    livingRoom: true,
    bedroom: false,
  };

  handleKitchen = (action) => {
    console.log("kitchen", action);
    this.setState({
      kitchen: !this.state.kitchen,
    });
  };

  //functional setState
  handleBathroom = (action) => {
    console.log("bathroom", action);
    this.setState((state, props) => {
      return {
        bathroom: !state.bathroom,
      };
    });
  };

  handleLivingRoom = () => {
    this.setState({
      livingRoom: !this.state.livingRoom,
    });
  };

  handleBedRoom = () => {
    this.setState({
      bedroom: !this.state.bedroom,
    });
  };

  render() {
    return (
      <div>
        {this.state.kitchen ? (
          <p>Kitchen's light is currently on </p>
        ) : (
          <p>Kitchen's light is currently off </p>
        )}
        <button onClick={this.handleKitchen}>Kitchen</button>
        <br></br>

        {this.state.bathroom ? (
          <p>Bathroom's light is currently on </p>
        ) : (
          <p>Bathroom's light is currently off </p>
        )}
        <button onClick={this.handleBathroom}>Bathroom</button>
        <br></br>

        {this.state.livingRoom ? (
          <p>Living room's light is currently on </p>
        ) : (
          <p>Living Room's light is currently off </p>
        )}
        <button onClick={this.handleLivingRoom}>Living room</button>
        <br></br>

        {this.state.bedroom ? (
          <p>Bedroom's light is currently on </p>
        ) : (
          <p>Bedroom's light is currently off </p>
        )}
        <button onClick={this.handleBedRoom}>Bedroom</button>
        <br></br>
      </div>
    );
  }
}

export { Page, House };
