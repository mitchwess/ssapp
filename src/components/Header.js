import React, { Component } from "react";
import { BiCameraMovie } from "react-icons/bi";
import "./css/Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="inner_header">
          <div className="logo_container">
            <h1>Stream Search</h1>
          </div>
          <div className="icon_container">
            <h1>
              <BiCameraMovie />
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
