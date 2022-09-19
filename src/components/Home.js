import React, { Component } from "react";
import { Options } from "./Options";

export class Home extends Component {
  render() {
    return (
      <div className="App">
        <h3>Welcome to stream search</h3>
        <Options />
      </div>
    );
  }
}
