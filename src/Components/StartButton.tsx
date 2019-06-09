import React, { Component } from "react";

interface StartProps {
  handleOnClick: () => any;
}

class StartButton extends Component<StartProps> {
  render() {
    return (
      <div className="start-button">
        <button onClick={this.props.handleOnClick}>Start New Game</button>
      </div>
    );
  }
}

export default StartButton;
