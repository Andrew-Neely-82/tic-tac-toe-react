import { Box } from "../export";
import './style.scss'

const Board = ({ board, onClick }) => {
  return (
    <div className="Board__">
      {board.map((value, index) => {
        const props = {
          value: value,
          onClick: () => onClick(index),
        };

        return <Box {...props} />;
      })}
    </div>
  );
};
export default Board;
