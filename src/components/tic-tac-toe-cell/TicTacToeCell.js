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
  const handleClick = () => {
    const newGridState = [...gridState];
    let newPlayerSymbol = playerSymbol === "x" ? "o" : "x";

    newGridState[x][y] = playerSymbol;

    setGridState(newGridState);
    setPlayerSymbol(newPlayerSymbol);
  };

  return (
    <button className="square" onClick={() => handleClick()}>
      {gridState[x][y]}
    </button>
  );
}

export default TicTacToeCell;
