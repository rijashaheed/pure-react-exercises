import React from "react";

class House1 extends React.Component {
  state = {
    rooms: {
      kitchen: true,
      bathroom: false,
      livingRoom: true,
      bedroom: false,
    },
  };

  //   handleKitchen = (action) => {
  //     console.log("kitchen", action);
  //     this.setState(prevState => ({
  //         kitchen: !prevState.rooms.kitchen
  //     })) }

  handleKitchen = (action) => {
    console.log("kitchen", action);
    this.setState({
      room: {
        kitchen: !this.state.kitchen,
      },
    });
  };
//   handleBathroom = (action) => {
//     console.log("kitchen", action);
//     this.setState({
//       room: {
//         bathroom: !this.bathroom,
//       },
//     });
//   };

  //   handleLivingRoom = () => {
  //     this.setState({
  //       livingRoom: !this.state.rooms.livingRoom,
  //     });
  //   };

  //   handleBedRoom = () => {
  //     this.setState({
  //       bedroom: !this.state.rooms.bedroom,
  //     });
  //   };

  render() {
    return (
      <div>
        <h2>Exercise 2</h2>

        {this.state.rooms.kitchen ? (
          <p>Kitchen's light is currently on </p>
        ) : (
          <p>Kitchen's light is currently off </p>
        )}
        <button onClick={this.handleKitchen}>Kitchen</button>
        <br></br>

        {this.state.rooms.bathroom ? (
          <p>Bathroom's light is currently on </p>
        ) : (
          <p>Bathroom's light is currently off </p>
        )}
        <button onClick={this.handleBathroom}>Bathroom</button>
        <br></br>

        {this.state.rooms.livingRoom ? (
          <p>Living room's light is currently on </p>
        ) : (
          <p>Living Room's light is currently off </p>
        )}
        <button onClick={this.handleLivingRoom}>Living room</button>
        <br></br>

        {this.state.rooms.bedroom ? (
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

export default House1;
