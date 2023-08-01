import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styling } from ".";
import { DarkModeContext } from "../../../../context/DarkModeContext";

const AboutModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { darkMode } = React.useContext(DarkModeContext);

  const className = darkMode ? "modal-dark" : "modal-light";

  return (
    <>
      <Button onClick={handleOpen} variant="">
        <span>open</span>
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box className={className} sx={styling}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span>About</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, display: "flex", justifyContent: "space-between", alignContent: "center" }}>
            <span>Dev</span>
            <span>Andrew Neely</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, display: "flex", justifyContent: "space-between", alignContent: "center" }}>
            <span>Version</span>
            <span>1.0</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, display: "flex", justifyContent: "space-between", alignContent: "center" }}>
            <span>Made in React.js with Mui components</span>
          </Typography>
          <Button className="close-settings modal-button" variant="contained" aria-label="Close About" onClick={handleClose}>
            <span>X</span>
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AboutModal;
