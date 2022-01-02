import React, { useState } from 'react'
import './GameHeader.css'

function GameHeader({updateBoardSize, setRunAlgorithm, emptyGridDisplay, updateAnimation}) {
    const MAX_BOARD_SIZE = 12;
    var array = [];
    for (let i = 4; i <= MAX_BOARD_SIZE; i++)
        array.push(i);

    const [boardSize, setBoardSize] = useState(4);

    const handleBoardSizeChange = (e) => {
        setBoardSize(e.target.value);
        updateBoardSize(e.target.value);
        emptyGridDisplay(true);
    }

    return (
        <div className='gameHeader pt-1'>
            <h3 className='h3'>N-Queens Visualiser</h3>
            <div className='controls'>
                <form>
                    <label> Chess Board Size : &nbsp;</label>
                    <select className='my-2 me-3' onChange={handleBoardSizeChange} value={boardSize}>
                        {array.map((ctr) => {
                            return <option value={ctr} key={ctr}>{ctr}</option>
                        })}
                    </select>
                    <button className='btn btn-warning m-2' onClick={(event) => {reset(event, updateBoardSize, boardSize, emptyGridDisplay)}}>Reset</button>
                    <button className='btn btn-primary m-2' onClick={(event) => {runAlgorithm(event, updateBoardSize, boardSize, setRunAlgorithm, emptyGridDisplay, updateAnimation)}}>Run Algorithm</button>
                </form>
            </div>
        </div>
    );
}

function runAlgorithm(e, updateBoardSize, boardSize, setRunAlgorithm, emptyGridDisplay, updateAnimation){
    updateBoardSize(Number(boardSize));
    setRunAlgorithm(true);
    emptyGridDisplay(false);
    updateAnimation();
    e.preventDefault();
}

function reset(e, updateBoardSize, boardSize, emptyGridDisplay){
    updateBoardSize(Number(boardSize))
    emptyGridDisplay(true);
    e.preventDefault();
}

export default GameHeader;