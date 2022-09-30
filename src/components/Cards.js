import React, { Component } from "react";
import "./css/Cards.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      netflix: this.props.data.netflix,
      hulu: this.props.data.hulu,
      prime: this.props.data.prime,
      disney: this.props.data.disney,
      activeKey: this.props.data.activeKey,
    };
  }
  render() {
    // const data = this.props.data
    // var genre = "";
    // switch (this.props.data.activeKey) {
    //   case 0:
    //     genre = "Action";
    //     break;
    //   case 1:
    //     genre = "Sci-Fi";
    //     break;
    //   case 2:
    //     genre = "Horror";
    //     break;
    //   case 3:
    //     genre = "";
    //     break;
    //   case 4:
    //     genre = "";
    //     break;
    //   case 5:
    //     genre = "";
    //     break;
    //   case 6:
    //     genre = "";
    //     break;
    //   case 7:
    //     genre = "";
    //     break;
    //   default:
    //     console.log("no genre");
    //   var json = {
    //     netflix: data.netflix,
    //     hulu: data.hulu,
    //     prime: data.prime,
    //     disney: data.disney,
    //     genre: genre,
    //   };

    return <div>hello</div>;
  }
}
export default Cards;
