import SettingsModal from "./settingsModal/SettingsModal";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, Tooltip } from "@mui/material";
import React, { useState } from "react";
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
        </Button>
      </Tooltip>
      <SettingsModal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default Settings;
