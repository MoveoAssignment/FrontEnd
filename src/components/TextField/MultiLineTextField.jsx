import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Highlight from "react-highlight";
import styles from "./styles.module.css";

export const MultiLineTextField = ({setCode}) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%", marginLeft:0 }, width: "100%"
      }}
      noValidate
      autoComplete="off"
    >
      <div className={styles['text-field']}>
        <TextField sx={{margin: "0px"}}
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={6}
          defaultValue="Default Value!"
          width="100%"
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
    </Box>
  );
};
