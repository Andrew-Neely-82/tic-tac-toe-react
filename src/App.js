import { Board } from "./components/export";
import { useState } from "react";
import "./App.scss";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);

  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    })

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick} />
    </div>
  );
}

export default App;
