import React, { useState, useEffect } from 'react';
import Square from './Square';
import Ranking from './Ranking';

const BoardGame = ({ player, value }) => {
    const defaultSquares = () => new Array(9).fill(null);
    const [squares, setSquares] = useState(defaultSquares());
    const [winner, setWinner] = useState(null);
    const [points, setPoints] = useState(0);

    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    useEffect(() => {
        const linesThatAre = (a, b, c) => {
            return winningLines.filter(squareIndexes => {
                const squareValues = squareIndexes.map(index => squares[index]);
                return JSON.stringify([a, b, c].sort()) === JSON.stringify(squareValues.sort());
            });
        };
        const playerWon = linesThatAre('x', 'x', 'x').length > 0;
        const computerWon = linesThatAre('o', 'o', 'o').length > 0;
        if (playerWon) {
            setWinner('X');
            setPoints(points + 10);
        }
        if (computerWon) {
            setWinner('O');
            setPoints(points + 10);
        }
        if (value === 'singlePlayer') {
            const isComputerTurn = squares.filter(square => square !== null).length % 2 === 1;

            const emptyIndexes = squares.map((square, index) => (square === null ? index : null)).filter(notNull => notNull !== null);

            const putComputerAt = index => {
                let newSquares = squares;
                newSquares[index] = 'o';
                setSquares([...newSquares]);
            };

            if (isComputerTurn) {
                const winningPatterns = linesThatAre('o', 'o', null);
                if (winningPatterns.length > 0) {
                    const winIndex = winningPatterns[0].filter(index => squares[index] === null)[0];
                    putComputerAt(winIndex);
                    return;
                }
                const linesToBlock = linesThatAre('x', 'x', null);
                if (linesToBlock.length > 0) {
                    const blockIndex = linesToBlock[0].filter(index => squares[index] === null)[0];
                    putComputerAt(blockIndex);
                    return;
                }

                const randomIndex = emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
                putComputerAt(randomIndex);
            }
        }
    }, [squares]);

    const isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;

    const handleSquareClick = index => {
        if (isPlayerTurn) {
            let newSquares = squares;
            newSquares[index] = 'x';
            setSquares([...newSquares]);
        } else {
            let newSquares = squares;
            newSquares[index] = 'o';
            setSquares([...newSquares]);
        }
    };

    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = 'Next player: ' + (isPlayerTurn ? 'X' : 'O');
    }

    const handleRestart = () => {
        setWinner(null);
        setSquares(defaultSquares());
    };

    return (
        <>
            <div className="container-board-game">
                {squares.map((square, index) => (
                    <Square
                        key={`square-${index}`}
                        x={square === 'x' ? 1 : 0}
                        o={square === 'o' ? 1 : 0}
                        winner={winner}
                        squares={squares}
                        onClick={() => handleSquareClick(index)}
                    />
                ))}
            </div>
            <div className="controls-status-restart">
                <p>{status}</p>
                {winner && (
                    <p>
                        Winner {winner} : {points}pts
                    </p>
                )}
                {winner === 'X' && <Ranking points={points} player={player} handleRestart={handleRestart} />}
                <button className="button-reset" onClick={() => handleRestart()}></button>
            </div>
        </>
    );
};

export default BoardGame;
