import React, { Component } from "react";
import "./App.css";
import StartButton from "./Components/StartButton";
import Gameboard from "./Components/Gameboard";
import UserInput from "./Components/UserInput";
import WrongGuesses from "./Components/WrongGuesses";

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
  wrongGuesses: string[];
  correct: string;
  maxTries: number;
  status: string;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      puzzle: "",
      gameboard: [""],
      currentGuess: "",
      wrongGuesses: [],
      correct: "",
      maxTries: 10,
      status: ""
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
      gameboard: gameboard,
      wrongGuesses: [],
      correct: "",
      maxTries: 10,
      status: "in progress"
    });
  };

  handleSubmitLetter(e) {
    this.setState({
      currentGuess: e.target.value.toUpperCase(),
      correct: ""
    });
    this.setState(state => {
      let puzzle = state.puzzle.split("");
      let gameboard = state.gameboard;
      let wrongGuesses = state.wrongGuesses;
      let correct;
      for (let i = 0; i < state.gameboard.length; i++) {
        if (puzzle.indexOf(state.currentGuess) > -1) {
          if (puzzle[i] == state.currentGuess) {
            console.log("Correct!", state.currentGuess);
            correct = `${state.currentGuess} was right!`;
            gameboard[i] = state.currentGuess;
            this.checkWin();
          }
        } else if (
          puzzle.indexOf(state.currentGuess) < 0 &&
          state.wrongGuesses.indexOf(state.currentGuess) < 0
        ) {
          wrongGuesses.push(state.currentGuess);
          correct = `${state.currentGuess} was wrong!`;
          console.log("Incorrect!", state.currentGuess);
          this.checkWin();
        }
      }
      return {
        gameboard: gameboard,
        wrongGuesses: wrongGuesses,
        correct: correct
      };
    });
    e.target.value = "";
  }

  checkWin() {
    if (this.state.wrongGuesses.length >= this.state.maxTries) {
      this.setState({ status: "lose" });
      // run gameover component
    } else if (this.state.gameboard.join("") === this.state.puzzle) {
      this.setState({ status: "win" });
    }
  }

  render() {
    return (
      <div>
        <StartButton handleOnClick={this.handleStartGame} />
        <Gameboard
          puzzleAnswer={this.state.puzzle}
          gameboard={this.state.gameboard}
        />
        <p>{this.state.correct}</p>
        <p>
          {this.state.wrongGuesses.length}/{this.state.maxTries}
        </p>
        <UserInput handleOnChange={this.handleSubmitLetter} />
        <WrongGuesses wrongGuesses={this.state.wrongGuesses} />
      </div>
    );
  }
}

export default App;
