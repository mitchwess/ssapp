import React, { Component } from "react";
import { Options } from "./Options";
import { Header } from "./Header";
import { Bubbles } from "./Bubbles";

export class Home extends Component {
  render() {
    return (
      <div className="App">
        <Bubbles />
        <Header />
        <Options />
      </div>
    );
  }
}
