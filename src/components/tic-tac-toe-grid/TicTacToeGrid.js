import React, { useEffect } from "react";
import TicTacToeCell from "../tic-tac-toe-cell/TicTacToeCell";
import "./TicTacToeGrid.css";

const DEFAULT_GRID_STATE = [
  new Array(3).fill([]),
  new Array(3).fill([]),
  new Array(3).fill([]),
];

function flatGridState(gridState) {
  const coordinates = gridState.reduce((accumulator, columnValues, xValue) => {
    for (let i = 0; i < columnValues.length; i++) {
      const currCoordinate = [xValue, i];
      accumulator.push(currCoordinate);
    }

    return accumulator;
  }, []);

  const linearGridValues = [];

  coordinates.forEach((currCoordinates) => {
    const currX = currCoordinates[0];
    const currY = currCoordinates[1];
    const coordinateValue = gridState[currX][currY];
    linearGridValues.push(coordinateValue);
  });

  return linearGridValues;
}

export function calculateWinner(linearGrid) {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  console.log({ linearGrid });

  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (
      linearGrid[a] &&
      linearGrid[a] === linearGrid[b] &&
      linearGrid[a] === linearGrid[c]
    ) {
      return linearGrid[a];
    }
  }

  return null;
}

function TicTacToeGrid() {
  const [gridState, setGridState] = React.useState(DEFAULT_GRID_STATE);
  const [playerSymbol, setPlayerSymbol] = React.useState("x");

  console.log({ gridState });

  useEffect(() => {
    const linearGrid = flatGridState(gridState);
    const winnerDetector = calculateWinner(linearGrid);
    console.log({ winnerDetector });
  }, [gridState]);

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
