import React, { Component } from "react";

interface Props {
  currentPuzzle: string;
}

class Gameboard extends Component<Props> {
  render() {
    if (this.props) {
      return <h1>Puzzle is {this.props.currentPuzzle}</h1>;
    }
  }
}

export default Gameboard;
