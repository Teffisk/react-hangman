import React, { Component } from "react";

interface Props {
  wrongGuesses?: string[];
}

interface State {}

class WrongGuesses extends Component<Props, State> {
  render() {
    return <h1 className="wrong-guesses">{this.props.wrongGuesses}</h1>;
  }
}

export default WrongGuesses;
