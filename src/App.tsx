import React, { Component } from "react";
import "./App.css";
import StartButton from "./Components/StartButton";
import Gameboard from "./Components/Gameboard";
import WrongGuesses from "./Components/WrongGuesses";
import Tries from "./Components/Tries";

interface Props {
  props: any;
}

interface State {}

let puzzles: string[];

puzzles = ["Hello World", "Create React App", "Superset of Javascript"];

let gameboard: string;

gameboard = puzzles[Math.floor(Math.random() * puzzles.length)];

class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      puzzle: gameboard
    };
  }

  render() {
    return (
      <div>
        <StartButton />
        <Gameboard currentPuzzle={this.puzzle} />
        {/* <WrongGuesses />
        <Tries /> */}
      </div>
    );
  }
}

export default App;
