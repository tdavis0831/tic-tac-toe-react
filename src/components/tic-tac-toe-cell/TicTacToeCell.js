import './TicTacToeCell.css'

function TicTacToeCell({ value,x,y, gridState, setGridState}) {

    const handleClick = event => {
        const newGridState = [...gridState]
        newGridState[x][y] = 'x'

        setGridState(newGridState)
    }



    return (
      <button className="square" onClick={(event)=> handleClick(event)}>
      {gridState[x][y]} 
      </button>
    );
  }
  

export default TicTacToeCell