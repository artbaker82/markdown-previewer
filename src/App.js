import React, { Component } from "react";
import Editor from "./components/editor";
import Preview from "./components/preview";
import "../src/styles/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "#Header",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <Editor input={this.state.input} onChange={this.handleChange} />
          </div>

          <div className="col">
            <Preview value={this.state.input} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
