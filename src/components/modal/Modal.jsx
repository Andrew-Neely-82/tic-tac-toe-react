import React, { useState } from "react";
import BoxContents from "./BoxContents";
import Modal from "@mui/material/Modal";
import "./style.scss";

const RulesModal = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <BoxContents onClick={handleClose} />
      </Modal>
    </>
  );
};

export default RulesModal;
