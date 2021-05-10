import React, { Component } from "react";
let marked = require("marked");

class Preview extends Component {
  render() {
    return (
      <div>
        <div id="preview" value={this.props.value}>
          <div dangerouslySetInnerHTML={{ __html: marked(this.props.value) }} />
        </div>
      </div>
    );
  }
}

export default Preview;
