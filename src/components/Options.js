import React, { Component } from "react";
import { SiHulu, SiNetflix, SiPrimevideo } from "react-icons/si";

import "./css/Options.css";

export class Options extends Component {
  render() {
    return (
      <div className="container">
        <label className="option">
          <input type="checkbox" className="checkbox" />
          <div className="optionitem netflix">
            <div className="icon netflix">
              <SiNetflix />
            </div>
          </div>
        </label>

        <label className="option">
          <input type="checkbox" className="checkbox" />
          <div className="optionitem hulu">
            <div className="icon hulu">
              <SiHulu />
            </div>
          </div>
        </label>

        <label className="option">
          <input type="checkbox" className="checkbox" />
          <div className="optionitem prime">
            <div className="icon prime">
              <SiPrimevideo />
            </div>
          </div>
        </label>
      </div>
    );
  }
}
