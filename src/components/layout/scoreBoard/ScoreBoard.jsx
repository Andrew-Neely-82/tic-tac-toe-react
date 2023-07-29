import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import "./style.scss";

const ScoreBoard = ({ scores, xPlaying, onClick }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="ScoreBoard__">
      <ButtonGroup className="ScoreBoard__group shadow">
        <Button className={`score score-x ${!xPlaying && "inactive"}`} onClick={onClick}>
          X - {xScore}
        </Button>
        <Button className={`score score-o ${xPlaying && "inactive"}`} onClick={onClick}>
          O - {oScore}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ScoreBoard;
