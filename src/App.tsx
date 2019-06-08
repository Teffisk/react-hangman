import React, { Component } from "react";
import "./App.css";
import StartButton from "./Components/StartButton";
import Gameboard from "./Components/Gameboard";
import UserInput from "./Components/UserInput";
import WrongGuesses from "./Components/WrongGuesses";
import ChooseGame from "./Components/ChooseGame";

interface Props {}

interface State {
  puzzle: string;
  puzzles: string[];
  gameboard: string[];
  currentGuess: string;
  wrongGuesses: string[];
  correct: string;
  maxTries: number;
  status: string;
  year?: number;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      puzzle: "",
      puzzles: [""],
      gameboard: [""],
      currentGuess: "",
      wrongGuesses: [],
      correct: "",
      maxTries: 10,
      status: ""
    };
    this.handleSubmitLetter = this.handleSubmitLetter.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  years = [
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018
  ];

  handleYearChange = e => {
    e.preventDefault();
    // set the state to the selected year

    const Url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${
      e.target.value
    }&sort_by=popularity.desc&api_key=1e85780dea920f95468cb80f57fbdc48&language=en`;
    console.log(Url);
    // fetch the top movies of that year, filter to titles of top ten
    fetch(Url)
      .then(res => res.json())
      .then(data => this.setState({ puzzles: this.getTopTenMovies(data) }));
  };

  getTopTenMovies = (data: any) => {
    console.log(data.results);
    let movies = data.results.filter(movie => {
      return (movie.original_language = "en");
    });
    movies = movies.map((movie: any) => {
      return movie.title;
    });
    return movies.slice(0, 10);
  };

  handleStartGame = () => {
    console.log(this.state.puzzles);
    let puzzle: string = this.state.puzzles[
      Math.floor(Math.random() * this.state.puzzles.length)
    ].toUpperCase();
    let gameboard: string[] = puzzle.split("").map(elem => {
      if (elem !== " " && elem !== "-" && elem !== ":") {
        return "_";
      } else return elem;
    });
    this.setState({
      puzzle: puzzle,
      gameboard: gameboard,
      wrongGuesses: [],
      correct: "",
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
          if (puzzle[i] === state.currentGuess) {
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
        <ChooseGame years={this.years} handleChange={this.handleYearChange} />
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
