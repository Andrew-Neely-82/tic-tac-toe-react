import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";
import "./style.scss";

const ResetButton = ({ resetBoard }) => {
  const props = {
    className: "ResetButton__",
    variant: "contained",
    onClick: resetBoard,
  };
  return (
    <Tooltip title="Reset" placement="bottom" arrow>
      <Button {...props}>
        <RestartAltIcon />
      </Button>
    </Tooltip>
  );
};
export default ResetButton;
