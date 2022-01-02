import React from 'react'
import './ChessBoard.css'

function ChessBoard({ boardInfo }) {
    const { boardSize, runAlgorithm, emptyGridDisplay, animation } = boardInfo


    let chessBoard = [];
    let chessRow = [];
    for (let j = 1; j <= boardSize; j++) {
        chessRow.push(<div className='chessBlock' key={`chessBlock${j}`}></div>)
    }
    for (let j = 1; j <= boardSize; j++) {
        chessBoard.push(<div className='chessRow' key={`chessRow${j}`}>{chessRow}</div>)
    }

    if (emptyGridDisplay) {
        deleteAnimation();
    }
    else if (runAlgorithm && animation.length != 0) {
        perfomAnimation(animation);
    }
    else
        deleteAnimation();

    return (
        <div className='chessBoard'>
            {chessBoard}
        </div>
    )
}

function perfomAnimation(animation) {
    deleteAnimation();
    let animationSpeed = 100;
    for (let i = 0; i < animation.length; i++) {
        let rowElement = document.getElementsByClassName('chessRow');
        if (rowElement[animation[i][0]] === undefined)
            continue;
        let element = rowElement[animation[i][0]].getElementsByClassName('chessBlock')[animation[i][1]];
        if (element === undefined)
            continue;
        if (animation[i][2] === 1) {
            setTimeout(() => {
                element.classList.add('correctPosition');
            }, i * animationSpeed);
        }
        else {
            setTimeout(() => {
                element.classList.remove('correctPosition');
            }, i * animationSpeed);
        }
    }
    let chessBoardCells = document.getElementsByClassName('chessBlock');
    setTimeout(() => {
        for (let i = 0; i < chessBoardCells.length; i++) {
            if (chessBoardCells[i].classList.contains('correctPosition'))
                chessBoardCells[i].classList.add('success');
        }
    }, (animation.length + 1) * animationSpeed);
}

function deleteAnimation() {
    let chessBoardCells = document.getElementsByClassName('chessBlock');
    for (let i = 0; i < chessBoardCells.length; i++) {
        chessBoardCells[i].classList.remove('correctPosition', 'success');
    }
}

export default ChessBoard