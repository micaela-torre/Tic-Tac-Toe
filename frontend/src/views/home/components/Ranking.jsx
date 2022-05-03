import React, { useEffect, useState } from 'react';
import DataPlayer from './DataPlayer';

const Ranking = ({ handleRestart }) => {
    // const [listOfWinners, setListOfWinners] = useState([]);
    // setListOfWinners(JSON.parse(localStorage.getItem('listOfWinners')));
    // const newList = listOfWinners?.sort((a, b) => b.points - a.points).filter(winner => winner.points !== 0);
    return (
        <div className="container-ranking">
            <h3 className="title-ranking">Weekly Ranking</h3>
            <div className="details-ranking"></div>
            <button className="button-reset" onClick={() => handleRestart()}></button>
        </div>
    );
};

export default Ranking;
