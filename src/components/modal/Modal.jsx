import BoxContents from "./BoxContents";
import Modal from "@mui/material/Modal";
import * as React from "react";
import "./style.scss";

const RulesModal = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Modal__">
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <BoxContents handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default RulesModal;
