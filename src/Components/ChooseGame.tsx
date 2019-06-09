import React, { Component } from "react";

interface Props {
  years: number[];
  handleChange: (e: any) => any;
}

interface State {}

class ChooseGame extends Component<Props, State> {
  render() {
    const yearOptions = this.props.years.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });

    return (
      <form className="year-form" onChange={this.props.handleChange}>
        <div>Pick a top ten movie from:</div>
        <select name="year">
          <option selected={true} disabled={true}>
            Select a year
          </option>
          {yearOptions}
        </select>
      </form>
    );
  }
}

export default ChooseGame;
