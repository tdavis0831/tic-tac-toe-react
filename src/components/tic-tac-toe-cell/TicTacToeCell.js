import "./TicTacToeCell.css";

function TicTacToeCell({
  gridState,
  playerSymbol,
  setGridState,
  setPlayerSymbol,
  value,
  x,
  y,
}) {
  const handleClick = (event) => {
    const newGridState = [...gridState];
    let newPlayerSymbol = playerSymbol === "x" ? "o" : "x";

    newGridState[x][y] = playerSymbol;

    setGridState(newGridState);
    setPlayerSymbol(newPlayerSymbol);
  };

  return (
    <button className="square" onClick={(event) => handleClick(event)}>
      {gridState[x][y]}
    </button>
  );
}

export default TicTacToeCell;
