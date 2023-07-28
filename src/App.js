import { Board, Box } from "./components/export";
import "./App.scss";

function App() {
  const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
  return (
    <div className="App">
      <Board board={board} />
      <Box value="x" onClick={null} />
    </div>
  );
}

export default App;
