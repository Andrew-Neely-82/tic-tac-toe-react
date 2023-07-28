import { Box, Button, Typography } from "@mui/material";
import { style, descriptionStyle } from "./style";

const BoxContents = (props) => {
  return (
    <Box sx={style}>
      <Button className="close" variant="contained" onClick={props.handleClose} sx={{ mt: 2 }}>
        X
      </Button>
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
          <span className="underline">To Switch Player Color </span>
          <br />
          select a square, <br />
          then select reset
        </span>
      </Typography>
    </Box>
  );
};

export default BoxContents;
