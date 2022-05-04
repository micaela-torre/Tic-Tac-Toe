import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Square from './Square';
import Ranking from './Ranking';
import { setPointsLocalStorage } from './functions/setLocalStorage';
import { SwalAlert } from './SwalAlert';

const BoardGame = ({ playerOne = {}, playerTwo = {}, isOnePlayer }) => {
    const defaultSquares = () => new Array(9).fill(null);
    const [squares, setSquares] = useState(defaultSquares());
    const [winner, setWinner] = useState(null);
    const [pointsOne, setPointsOne] = useState(100);
    const [pointsTwo, setPointsTwo] = useState(100);

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
        /**
         * Return an array of winning lines that contain the values a, b, and c.
         * @returns The winningLines array is being filtered by the squareIndexes array.
         */
        const linesThatAre = (a, b, c) => {
            return winningLines.filter(squareIndexes => {
                const squareValues = squareIndexes.map(index => squares[index]);
                return JSON.stringify([a, b, c].sort()) === JSON.stringify(squareValues.sort());
            });
        };

        /**
         * It takes a player name and a points value, and then it updates the points value in the
         * localStorage for that player.
         */

        const playerWon = linesThatAre('x', 'x', 'x').length > 0;
        const computerOrPlayerTwo = linesThatAre('o', 'o', 'o').length > 0;

        if (playerWon) {
            setWinner(playerOne.namePlayerOne);
            setPointsOne(pointsOne + 100);
            setPointsLocalStorage(playerOne.namePlayerOne, pointsOne);
            if (!!playerTwo.namePlayerTwo) {
                SwalAlert(`${playerTwo?.namePlayerTwo} you have lost, try again!`, 'https://i.postimg.cc/hGYKPvVy/763744.png', 'center');
            }
        }
        if (computerOrPlayerTwo) {
            setWinner(playerTwo?.namePlayerTwo || 'Computer');
            setPointsTwo(pointsTwo + 100);
            setPointsLocalStorage(playerTwo?.namePlayerTwo || 'Computer', pointsTwo);
            SwalAlert(`${playerOne?.namePlayerOne} you have lost, try again!`, 'https://i.postimg.cc/hGYKPvVy/763744.png', 'center');
        }
        if (isOnePlayer) {
            const isComputerTurn = squares.filter(square => square !== null).length % 2 === 1;
            const emptyIndexes = squares.map((square, index) => (square === null ? index : null)).filter(notNull => notNull !== null);

            /**
             * The function putComputerAt() takes an index as an argument and sets the value of the square
             * at that index to 'o'.
             */
            const putComputerAt = index => {
                let newSquares = squares;
                newSquares[index] = 'o';
                setSquares([...newSquares]);
            };

            if (isComputerTurn) {
                /* It's checking if the computer is about to win, and if so, it wins. */
                const winningPatterns = linesThatAre('o', 'o', null);
                if (winningPatterns.length > 0) {
                    const winIndex = winningPatterns[0].filter(index => squares[index] === null)[0];
                    putComputerAt(winIndex);
                    return;
                }
                /* It's checking if the player is about to win, and if so, it blocks the player. */
                const linesToBlock = linesThatAre('x', 'x', null);
                if (linesToBlock.length > 0) {
                    const blockIndex = linesToBlock[0].filter(index => squares[index] === null)[0];
                    putComputerAt(blockIndex);
                    return;
                }

                /* It's generating a random number between 0 and the length of the emptyIndexes array. */
                const randomIndex = emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
                putComputerAt(randomIndex);
            }
        }
    }, [squares]);

    const isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;
    const handleSquareClick = index => {
        /* It's checking if it's the player's turn, and if so, it sets the square to 'x', otherwise it sets
   it to 'o'. */
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

    const isATie = !winner && !squares.includes(null);

    if (isATie) {
        SwalAlert("It's a tie, try again!", 'https://i.postimg.cc/hjc2Hb5V/2229675.png', 'center');
        setSquares(defaultSquares);
    }

    let status;

    status = winner ? `Winner: ${winner}` : 'Next player: ' + (isPlayerTurn ? playerOne.namePlayerOne : playerTwo.namePlayerTwo);

    const handleRestart = () => {
        setSquares(defaultSquares());
        setWinner(null);
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
                        onClick={() => handleSquareClick(index)}
                    />
                ))}
            </div>
            <div className="controls-status-restart">
                <p>{status}</p>
                {/* <Timer/> */}
                {winner && <Ranking handleRestart={handleRestart} />}

                <button className="button-reset" onClick={handleRestart}></button>
            </div>
        </>
    );
};

BoardGame.propTypes = {
    isOnePlayer: PropTypes.any,
    playerOne: PropTypes.object,
    playerTwo: PropTypes.object,
};

export default BoardGame;
