import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { visuallyHidden } from "@mui/utils";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
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
        <Box sx={visuallyHidden}>Reset the board</Box>
      </Button>
    </Tooltip>
  );
};

export default ResetButton;
