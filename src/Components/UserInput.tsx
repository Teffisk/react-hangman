import React, { Component } from "react";

interface Props {
  handleOnChange: (e: any) => any;
}

interface State {}

class UserInput extends Component<Props, State> {
  render() {
    return (
      <form id="letter">
        <input type="text" onChange={this.props.handleOnChange} />
      </form>
    );
  }
}

export default UserInput;
