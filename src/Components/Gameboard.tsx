import React, { Component } from "react";

interface Props {
  puzzleAnswer: string;
  gameboard: string[];
}

interface State {
  gameboard: string[];
}

class Gameboard extends Component<Props, State> {
  render() {
    return <h1 className="gameboard">{this.props.gameboard}</h1>;
  }
}

export default Gameboard;
