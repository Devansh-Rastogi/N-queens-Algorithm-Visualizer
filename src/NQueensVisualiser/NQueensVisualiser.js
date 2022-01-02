import React, { Component } from 'react'
import { performNQueenAlgorithm } from '../server/N-QueensAlgorithm';
import ChessBoard from '../ChessBoard/ChessBoard';
import GameHeader from '../GameHeader/GameHeader'

export class NQueensVisualiser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            boardSize: 4,
            runAlgorithm: false,
            emptyGridDisplay: true,
            animation: []
        };
    }

    updateBoardSize = (chessBoardSize) => {
        this.setState(() => {return {boardSize: chessBoardSize}});
    }

    updateAnimation = () => {
        this.setState((prevState) => {return {animation: performNQueenAlgorithm(prevState.boardSize)}})
    }

    setRunAlgorithm = (runAlgorithm) => {
        this.setState(() => {return {runAlgorithm: runAlgorithm}});
    }

    setEmptyGridDisplay = (emptyGridDisplay) => {
        this.setState(() => {return {emptyGridDisplay: emptyGridDisplay}});
    }

    render() {
        return (
            <>
                <GameHeader
                    updateBoardSize={this.updateBoardSize}
                    setRunAlgorithm={this.setRunAlgorithm}
                    emptyGridDisplay={this.setEmptyGridDisplay}
                    updateAnimation = {this.updateAnimation}
                />
                <ChessBoard
                    boardInfo = {this.state}
                />
            </>
        )
    }
}

export default NQueensVisualiser
