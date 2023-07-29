import { ResetButton, ScoreButton, Settings } from "../export";
import { ButtonGroup } from "@mui/material";
import "./style.scss";

const Controls = ({ resetBoard, openSettings, clearScores }) => {
  return (
    <div className="Controls__">
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <ResetButton resetBoard={resetBoard} />
        <ScoreButton clearScores={clearScores} />
        <Settings openSettings={openSettings} />
      </ButtonGroup>
    </div>
  );
};
export default Controls;
