import React, { Component } from "react";

export class Profile extends Component {
  state = {
    timer: 0,
  };
  componentDidMount = () => {
    this.intervalId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  render() {
    const { imgsrc, profession, fullName } = this.props;

    return (
      <div>
        <h1>{fullName}</h1>
        <h1>{profession}</h1>
        <img src={imgsrc} alt="" />
        <h2>{this.state.timer}</h2>
      </div>
    );
  }
}

export default Profile;
