import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import AppWrapper from "./components/AppWrapper/AppWrapper";
import Meetings from "./pages/Meetings/Meetings";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Meetings />
      </AppWrapper>
    );
  }
}

export default App;
