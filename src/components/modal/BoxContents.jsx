import { Box, Button, Typography } from "@mui/material";
import { style, descriptionStyle } from "./style";
import React, { forwardRef } from "react";

const BoxContents = forwardRef(({ onClick }, ref) => {
  return (
    <Box ref={ref} sx={style}>
      <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ py: 2, textAlign: "center" }}>
        <span>Tic Tac Toe</span>
      </Typography>
      <Typography id="modal-modal-description" sx={descriptionStyle}>
        <span>Red goes First Then Blue</span>
      </Typography>
      <Typography id="modal-modal-description" sx={descriptionStyle}>
        <span>3 boxes in any row wins!</span>
      </Typography>
      <Typography id="modal-modal-description" sx={{ ...descriptionStyle, marginTop: 5 }}>
        <span>
          <span className="underline">To Switch Player Color</span>
          <br />
          select from the scoreboard <br />
        </span>
      </Typography>
      <Button className="close modal-button" variant="contained" aria-label="close" onClick={onClick} sx={{ mt: 2 }}>
        X
      </Button>
    </Box>
  );
});

export default BoxContents;
