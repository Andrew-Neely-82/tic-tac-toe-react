import { Box, Button, Typography } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const SettingsModalBox = forwardRef(({ onClick }, ref) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the initial darkMode value from localStorage if available
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    // Save the darkMode value to localStorage whenever it changes
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Update the body class based on the darkMode value
    if (darkMode) {
      document.body.classList.add("bg-dark");
      document.body.classList.remove("bg-light");
    } else {
      document.body.classList.add("bg-light");
      document.body.classList.remove("bg-dark");
    }
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
});

export default SettingsModalBox;
