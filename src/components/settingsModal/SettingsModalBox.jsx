import React, { useContext, useEffect } from 'react';
import { Box, Button, Typography } from "@mui/material";
import DarkModeToggle from "./DarkModeToggle";
import { DarkModeContext } from "../../context/DarkModeContext"; // update the path according to your folder structure
import { backgroundChange, darkModeClasses } from "./index";

const SettingsModalBox = ({ onClick }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    // Update the body class based on the darkMode value
    backgroundChange(darkMode);

    // Apply the "box" class directly to all elements with the "box" class
    const boxElements = document.querySelectorAll(".box");
    const scoreElements = document.querySelectorAll(".score");
    const shadowElements = document.querySelectorAll(".ScoreBoard__group");

    darkModeClasses(boxElements, scoreElements, shadowElements, darkMode);
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Settings
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        Dark Mode
        <DarkModeToggle checked={darkMode} onChange={handleDarkModeToggle} />
      </Typography>
      <Button className="close-settings" onClick={onClick}>
        X
      </Button>
    </Box>
  );
};

export default SettingsModalBox;
