import React from "react";
import TicTacToeCell from "../tic-tac-toe-cell/TicTacToeCell";
import "./TicTacToeGrid.css";

const DEFAULT_GRID_STATE = [
  new Array(3).fill([]),
  new Array(3).fill([]),
  new Array(3).fill([]),
];

function TicTacToeGrid() {
  const [gridState, setGridState] = React.useState(DEFAULT_GRID_STATE);
  const [playerSymbol, setPlayerSymbol] = React.useState("x");

  return (
    <div className="tic-tac-toe-app">
      <TicTacToeCell
        playerSymbol={playerSymbol}
        value={0}
        x={0}
        y={2}
        gridState={gridState}
        setGridState={setGridState}
        setPlayerSymbol={setPlayerSymbol}
      />
      <TicTacToeCell
        playerSymbol={playerSymbol}
        value={1}
        x={1}
        y={2}
        gridState={gridState}
        setGridState={setGridState}
        setPlayerSymbol={setPlayerSymbol}
      />
      <TicTacToeCell
        playerSymbol={playerSymbol}
        value={2}
        x={2}
        y={2}
        gridState={gridState}
        setGridState={setGridState}
        setPlayerSymbol={setPlayerSymbol}
      />

      <TicTacToeCell
        playerSymbol={playerSymbol}
        value={3}
        x={0}
        y={1}
        gridState={gridState}
        setGridState={setGridState}
        setPlayerSymbol={setPlayerSymbol}
      />
      <TicTacToeCell
        playerSymbol={playerSymbol}
        value={4}
        x={1}
        y={1}
        gridState={gridState}
        setGridState={setGridState}
        setPlayerSymbol={setPlayerSymbol}
      />
      <TicTacToeCell
        playerSymbol={playerSymbol}
        value={5}
        x={2}
        y={1}
        gridState={gridState}
        setGridState={setGridState}
        setPlayerSymbol={setPlayerSymbol}
      />

      <TicTacToeCell
        playerSymbol={playerSymbol}
        value={6}
        x={0}
        y={0}
        gridState={gridState}
        setGridState={setGridState}
        setPlayerSymbol={setPlayerSymbol}
      />
      <TicTacToeCell
        playerSymbol={playerSymbol}
        value={7}
        x={1}
        y={0}
        gridState={gridState}
        setGridState={setGridState}
        setPlayerSymbol={setPlayerSymbol}
      />
      <TicTacToeCell
        playerSymbol={playerSymbol}
        value={8}
        x={2}
        y={0}
        gridState={gridState}
        setGridState={setGridState}
        setPlayerSymbol={setPlayerSymbol}
      />
    </div>
  );
}

export default TicTacToeGrid;
