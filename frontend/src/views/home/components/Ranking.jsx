import React from 'react';
import DataPlayer from './DataPlayer';

const Ranking = ({ handleRestart, points, player }) => {
    return (
        <div className="container-ranking">
            <h3 className="title-ranking">Weekly Ranking</h3>
            <div className="details-ranking">
               <DataPlayer />
            </div>
            <button className="button-reset" onClick={() => handleRestart()}></button>
        </div>
    );
};

export default Ranking;
