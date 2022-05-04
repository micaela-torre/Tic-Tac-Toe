import React from 'react';
import DataPlayer from './DataPlayer';

const Ranking = ({ handleRestart }) => {
    const listOfWinners = JSON.parse(localStorage.getItem('listOfWinners'));
    const listOfWinnersFinally = listOfWinners.filter(winner => winner.namePlayerOne || winner.namePlayerTwo);
    return (
        <div className="container-ranking">
            <h3 className="title-ranking">top 15</h3>
            <div className="details-ranking">
                {listOfWinnersFinally
                    .sort((a, b) => b.points - a.points)
                    .slice(0, 15)
                    .map((winner, index) => (
                        <DataPlayer key={`winner-${index}`} winner={winner} />
                    ))}
            </div>
            <button className="button-reset" onClick={() => handleRestart()}></button>
        </div>
    );
};

export default Ranking;
