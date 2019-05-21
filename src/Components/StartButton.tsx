import React, { Component } from "react";

class StartButton extends Component {
  handleOnClick = () => {
    return;
  };
  render() {
    return <button onClick={this.handleOnClick}>Start New Game</button>;
  }
}

export default StartButton;
