import EqualizerIcon from "@mui/icons-material/Equalizer";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";
import './style.scss'

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
    <Tooltip {...tooltipProps}>
      <Button {...buttonProps}>
        <EqualizerIcon />
      </Button>
    </Tooltip>
  );
};
export default ScoreButton;
