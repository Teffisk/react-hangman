import React, { Component } from "react";

interface Props {
  years: number[];
  handleChange: (e: any) => any;
}

interface State {}

class ChooseGame extends Component<Props, State> {
  render() {
    const yearOptions = this.props.years.map(year => {
      return <option value={year}>{year}</option>;
    });

    return (
      <form onChange={this.props.handleChange}>
        <label>Choose Year</label>
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
