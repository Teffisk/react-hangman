import React, { Component } from "react";
import "./App.css";
import StartButton from "./Components/StartButton";
import Gameboard from "./Components/Gameboard";
import UserInput from "./Components/UserInput";

interface Props {
  puzzle?: string;
  puzzles?: string[];
  gameboard?: string[];
  wrongGuesses?: string[];
  gameStatus?: string;
  handleStartGame?: () => void;
  handleSubmitLetter?: () => void;
}

interface State {
  puzzle: string;
  gameboard: string[];
  currentGuess: string;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      puzzle: "",
      gameboard: [""],
      currentGuess: ""
    };
    this.handleSubmitLetter = this.handleSubmitLetter.bind(this);
  }
  puzzles = ["Hello World", "Create React App", "Superset of Javascript"];

  handleStartGame = () => {
    let puzzle: string = this.puzzles[
      Math.floor(Math.random() * this.puzzles.length)
    ].toUpperCase();
    let gameboard: string[] = puzzle.split("").map(elem => {
      if (elem != " ") {
        return "_";
      } else return elem;
    });
    this.setState({
      puzzle: puzzle,
      gameboard: gameboard
    });
  };

  handleSubmitLetter(e) {
    this.setState({
      currentGuess: e.target.value.toUpperCase()
    });
    console.log(this.state.currentGuess);
    this.setState((state, props) => {
      let puzzle = state.puzzle.split("");
      let gameboard = state.gameboard;
      for (let i = 0; i < state.gameboard.length; i++) {
        if (puzzle[i] == state.currentGuess) {
          console.log("Correct!", state.currentGuess);
          gameboard[i] = state.currentGuess;
        } else {
          console.log("Incorrect!", state.currentGuess);
        }
      }
      return { gameboard: gameboard };
    });
    e.target.value = "";
  }

  componentDidMount() {
    this.handleStartGame();
  }
  render() {
    return (
      <div>
        <StartButton handleOnClick={this.handleStartGame} />
        <Gameboard
          puzzleAnswer={this.state.puzzle}
          gameboard={this.state.gameboard}
        />
        <UserInput handleOnChange={this.handleSubmitLetter} />
      </div>
    );
  }
}

export default App;
