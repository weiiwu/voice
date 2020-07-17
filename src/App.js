import React from "react";
import axios from "axios";
import logo from "./logo.png";
import "./App.css";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        console.log(advice);
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <div className="img">
            <img src={logo} alt="logo" />
          </div>
          <h2 className="heading">{advice}</h2>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Hear God's Voice</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
