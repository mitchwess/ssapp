import React, { Component } from "react";
import { Options } from "./Options";
import { Header } from "./Header";
import { Bubbles } from "./Bubbles";
import Genres from "./Genres";
import Submit from "./Submit";

export class Home extends Component {
  render() {
    return (
      <div className="App">
        <Bubbles />
        <Header />
        <Options />
        <Genres />
        <Submit />
      </div>
    );
  }
}
