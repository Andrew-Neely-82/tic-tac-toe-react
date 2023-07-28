import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import "./style.scss";

const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="ScoreBoard__">
      <ButtonGroup className="ScoreBoard__group">
        <Button className={`score score-x ${!xPlaying && "inactive"}`}>X - {xScore}</Button>
        <Button className={`score score-o ${xPlaying && "inactive"}`}>O - {oScore}</Button>
      </ButtonGroup>
    </div>
  );
};

export default ScoreBoard;
