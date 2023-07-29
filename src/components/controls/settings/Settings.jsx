import SettingsModal from "./settingsModal/SettingsModal";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, Tooltip } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./style.scss";

const Settings = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <Tooltip title="Settings" arrow>
        <Button className="settings" onClick={handleOpen}>
          <SettingsIcon />
          <Box sx={visuallyHidden}>Settings</Box>
        </Button>
      </Tooltip>
      <SettingsModal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default Settings;
