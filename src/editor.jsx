import React from "react";

const Editor = (props) => {
  return (
    <React.Fragment>
      <textarea
        className="mx-3"
        id="editor"
        value={props.input}
        onChange={props.onChange}
      ></textarea>
    </React.Fragment>
  );
};

export default Editor;
