import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export function CodeBoard({ solution, setIsCorrect, readOnly, socket, defaultValue, setMessage }) {
  const onChange = React.useCallback((value, viewUpdate) => {
    socket.emit("message", value)
    if (value === solution) {
      setIsCorrect(true);
      console.log("Correct answer! from codeBoard")
    }
    else {
      //if the value equals to solution without last char 
      if (value === solution.slice(0, -1) || value.slice(0, -1) === solution) {
        setIsCorrect(false);
      }
    }
  }, [setIsCorrect, solution, socket]);
  if(defaultValue === solution){
    setIsCorrect(true);
  }
  else{
    setIsCorrect(false);
  }
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
