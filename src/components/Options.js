import React, { Component } from "react";
import { SiHulu, SiNetflix, SiPrimevideo } from "react-icons/si";
import { FaFortAwesome } from "react-icons/fa";

import "./css/Options.css";

export class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: {
        netflix: false,
        hulu: false,
        prime: false,
        disney: false,
      },
    };
  }

  handleCheckbox = (event) => {
    let state = this.state;
    state.services[event.target.value] = event.target.checked;
    this.setState(state);
    console.log(this.state.services);
  };

  render() {
    return (
      <>
        <div className="container">
          <label className="option">
            <input
              onChange={this.handleCheckbox}
              type="checkbox"
              className="checkbox"
              name="services"
              value="netflix"
              checked={this.state.services.netflix}
            />
            <div className="optionitem netflix">
              <div className="icon netflix">
                <SiNetflix />
              </div>
            </div>
          </label>

          <label className="option">
            <input
              onChange={this.handleCheckbox}
              type="checkbox"
              className="checkbox"
              name="services"
              value="hulu"
              checked={this.state.services.hulu}
            />
            <div className="optionitem hulu">
              <div className="icon hulu">
                <SiHulu />
              </div>
            </div>
          </label>

          <label className="option">
            <input
              onChange={this.handleCheckbox}
              type="checkbox"
              className="checkbox"
              name="services"
              value="prime"
              checked={this.state.services.prime}
            />
            <div className="optionitem prime">
              <div className="icon prime">
                <SiPrimevideo />
              </div>
            </div>
          </label>
          <label className="option">
            <input
              onChange={this.handleCheckbox}
              type="checkbox"
              className="checkbox"
              name="services"
              value="disney"
              checked={this.state.services.disney}
            />
            <div className="optionitem disney">
              <div className="icon disney">
                <FaFortAwesome />
              </div>
            </div>
          </label>
        </div>
      </>
    );
  }
}
