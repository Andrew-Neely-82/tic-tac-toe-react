import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, Tooltip } from "@mui/material";
import SettingsModal from "../settingsModal/SettingsModal";
import './style.scss'

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
        </Button>
      </Tooltip>
      <SettingsModal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default Settings;
