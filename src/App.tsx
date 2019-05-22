import React, { Component } from "react";
import "./App.css";
import StartButton from "./Components/StartButton";
import Gameboard from "./Components/Gameboard";
// import Game from "./Interfaces/Game.interface";

interface Props {
  puzzle?: string;
  puzzles?: string[];
  gameboard?: string[];
  wrongGuesses?: string[];
  gameStatus?: string;
  handleStartGame?: () => void;
}

interface State {
  puzzle: string;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      puzzle: ""
    };
  }
  puzzles = ["Hello World", "Create React App", "Superset of Javascript"];

  handleStartGame = () => {
    this.setState({
      puzzle: this.puzzles[Math.floor(Math.random() * this.puzzles.length)]
    });
  };

  componentDidMount() {
    this.handleStartGame();
  }
  render() {
    return (
      <div>
        <StartButton handleOnClick={this.handleStartGame} />
        <Gameboard currentPuzzle={this.state.puzzle} />
      </div>
    );
  }
}

export default App;
