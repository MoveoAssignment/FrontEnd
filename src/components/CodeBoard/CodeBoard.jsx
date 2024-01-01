import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export function CodeBoard({ solution, setIsCorrect, readOnly, socket, defaultValue, setMessage }) {
  const onChange = React.useCallback((value, viewUpdate) => {
    socket.emit("message", value)
    setIsCorrect(value === solution);
  }, [setIsCorrect, solution, socket]);
 
  return (
    <div>
      <CodeMirror
        value={defaultValue}
        height="200px"
        theme="dark"
        width="100%"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  );
}
