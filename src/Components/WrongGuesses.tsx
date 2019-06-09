import React, { Component } from "react";

interface Props {
  wrongGuesses?: string[];
}

interface State {}

class WrongGuesses extends Component<Props, State> {
  render() {
    return (
      <div className="wrong-guesses">
        <h4>Wrong Letters</h4>
        <h1>{this.props.wrongGuesses}</h1>
      </div>
    );
  }
}

export default WrongGuesses;
