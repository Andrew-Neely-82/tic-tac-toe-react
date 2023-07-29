import EqualizerIcon from "@mui/icons-material/Equalizer";
import { visuallyHidden } from "@mui/utils";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import "./style.scss";

const ScoreButton = ({ clearScores }) => {
  const tooltipProps = {
    title: "Clear Scores",
    placement: "bottom",
  };

  const buttonProps = {
    className: "ClearButton__",
    variant: "contained",
    onClick: clearScores,
  };

  return (
    <Tooltip {...tooltipProps} arrow>
      <Button {...buttonProps}>
        <EqualizerIcon />
        <Box sx={visuallyHidden}>Reset Scores</Box>
      </Button>
    </Tooltip>
  );
};

export default ScoreButton;
