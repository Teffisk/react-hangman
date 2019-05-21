import React, { Component } from "react";

interface Props {
  currentPuzzle: string;
}

class Gameboard extends Component<Props> {
  render() {
    return <h1>Gameboard is {this.props.currentPuzzle}</h1>;
  }
}

export default Gameboard;
