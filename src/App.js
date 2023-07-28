import { Board } from "./components/export";
import "./App.scss";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState(["X", "X", "X", "X", "X", "X", "X", "X", "X"]);
  return (
    <div className="App">
      <Board board={board} onClick={null} />
    </div>
  );
}

export default App;
