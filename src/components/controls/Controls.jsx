import { ResetButton, Settings } from "../export";
import { ButtonGroup } from "@mui/material";
import "./style.scss";

const Controls = ({ resetBoard, openSettings }) => {
  return (
    <div className="Controls__">
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <ResetButton resetBoard={resetBoard} title="reset" />
        <Settings openSettings={openSettings} />
      </ButtonGroup>
    </div>
  );
};
export default Controls;
