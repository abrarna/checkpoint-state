import React, { Component } from "react";
import "./App.css";
import Profile from "./component/Profile";
import image from "./jeune-etudiante.jpg.avif";
export class App extends Component {
  state = {
    person: {
      fullName: "Abrar Nasser",
      profession: "étudiante",
      imgsrc: image,
    },

    show: false,
  };
  toggleshow = () => this.setState({ show: !this.state.show });
  render() {
    return (
      <div className="container">
        <button className="button" onClick={this.toggleshow}>
          {" "}
          {this.state.show ? "Hide" : "Show"}
          Profile
        </button>
        <div>
          {this.state.show && (
            <Profile
              fullName={this.state.person.fullName}
              profession={this.state.person.profession}
              imgsrc={this.state.person.imgsrc}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
