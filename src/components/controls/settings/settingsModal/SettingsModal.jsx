import SettingsModalBox from "./SettingsModalBox";
import { Modal } from "@mui/material";
import * as React from "react";
import "./style.scss";

const SettingsModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <SettingsModalBox open={open} onClick={handleClose} />
      </Modal>
    </div>
  );
};

export default SettingsModal;
