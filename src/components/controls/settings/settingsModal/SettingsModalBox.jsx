import { DarkModeContext } from "../../../../context/DarkModeContext";
import { backgroundChange, darkModeClasses, styling } from "./index";
import React, { forwardRef, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import DarkModeToggle from "./DarkModeToggle";

const SettingsModalBox = forwardRef(({ onClick }, ref) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    // Update the body class based on the darkMode value
    backgroundChange(darkMode);

    // Apply the "box" class directly to all elements with the "box" class
    const boxElements = document.querySelectorAll(".box");
    const scoreElements = document.querySelectorAll(".score");
    const shadowElements = document.querySelectorAll(".ScoreBoard__group");
    const modalElements = document.querySelectorAll(".MuiBox-root");

    darkModeClasses(boxElements, scoreElements, shadowElements, modalElements, darkMode);
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const style = styling;

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <span>Settings</span>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <span>Dark Mode</span>
        <DarkModeToggle checked={darkMode} onChange={handleDarkModeToggle} />
      </Typography>
      <Button className="close-settings" onClick={onClick}>
        <span>X</span>
      </Button>
    </Box>
  );
});

export default SettingsModalBox;
