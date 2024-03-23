import React, { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/keshrisuman24");
    const res =await data.json();
    console.log(res)
    this.setState({ userData: res });
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.state.userData?.name}</h2>
        <h3>Location: Deoghar</h3>
        <h3>Contact: keshrisuman24@gmail.com</h3>
      </div>
    );
  }
}
