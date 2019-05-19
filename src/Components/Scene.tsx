import React, { Component } from "react";

interface Props {}

interface State {
  count: number;
}

const puzzles: string[];

puzzles = ["Hello World", "Create React App", "Superset of Javascript"];

const gameboard = puzzles[Math.floor(Math.random() * puzzles.length)];

class Scene extends Component {
  render() {
    return <div>{gameboard}</div>;
  }
}

export default Scene;
