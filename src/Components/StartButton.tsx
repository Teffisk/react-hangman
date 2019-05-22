import React, { Component } from "react";

interface StartProps {
  handleOnClick: () => any;
}

class StartButton extends Component<StartProps> {
  render() {
    return <button onClick={this.props.handleOnClick}>Start New Game</button>;
  }
}

export default StartButton;
