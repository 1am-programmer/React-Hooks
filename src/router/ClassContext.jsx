import React, { Component } from "react";
import { useContext } from "react";
import { ThemeContext } from "../Hooks/UseContext";

// const = useContext(ThemeContext);
export default class ClassContext extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      padding: "2rem",
      margin: "2rem",
    };
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
