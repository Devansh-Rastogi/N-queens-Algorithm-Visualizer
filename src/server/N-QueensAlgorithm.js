export const performNQueenAlgorithm = (boardSize) => {
    var possibleSolutions = [];
    var currentPositionOfQueens = [];
    var animation = [], allPossiblePaths = [], solutionCtr = 0;
    backTrackingSoln(boardSize, 0, possibleSolutions, currentPositionOfQueens, animation, allPossiblePaths, solutionCtr);
    console.log(allPossiblePaths)
    return allPossiblePaths[0];//Animation for only 1st Possible Result
}

function backTrackingSoln(boardSize, row, allPossibleSolutions, currentPositionOfQueens, animation, allPossiblePaths, solutionCtr){
    if(solutionCtr>=10)
        return solutionCtr;
    
    if(row===boardSize){
        allPossibleSolutions.push(buildChessBoard(currentPositionOfQueens));
        allPossiblePaths.push(buildCurrentPath(animation));
        solutionCtr++;
        return solutionCtr;
    }

    for(let col=0; col<boardSize; col++){
        animation.push([row, col, 1]);
        if(!isValidColumn(row, col, currentPositionOfQueens)){
            animation.push([row, col, -1]);
            continue;
        }
        currentPositionOfQueens.push(col);
        solutionCtr = backTrackingSoln(boardSize, row + 1, allPossibleSolutions, currentPositionOfQueens, animation, allPossiblePaths, solutionCtr);
        if(solutionCtr >= 10)
            return solutionCtr;
        currentPositionOfQueens.pop();
        animation.push([row, col, -1]);
    }

    return allPossiblePaths.length;
}

function isValidColumn(row, col, currentPositionOfQueens){
    for(let i=0; i<currentPositionOfQueens.length; i++){
        if(currentPositionOfQueens[i]===col || Math.abs(row-i)===Math.abs(col-currentPositionOfQueens[i]))
            return false;
    }
    return true;
}

function buildChessBoard(currentPositionOfQueens){
    let chessBoard = [];
    let chessRow = [];
    var boardSize = currentPositionOfQueens.length;
    for(let i=0;i<boardSize;i++){
        chessRow = [];
        for(let j=0; j<boardSize; j++)
            chessRow.push(0);
        chessBoard.push(chessRow);
        chessBoard[i][currentPositionOfQueens[i]] = 1;
    }
    return chessBoard;
}

function buildCurrentPath(animation){
    return [].concat(animation);
}