import "./style.scss";

const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="ScoreBoard__">
      <span className={`score score-x ${!xPlaying && "inactive"}`}>X - {xScore}</span>
      <span className={`score score-o ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  );
};
export default ScoreBoard;
