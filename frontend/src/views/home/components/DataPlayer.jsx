import React from 'react';


const DataPlayer = ({ infoWinner }) => {
    return (
        <div className="data-winner">
            {/* <Avatar image={infoWinner?.namePlayer === 'Computer' ? 'https://i.postimg.cc/Fs5pKKqW/689355.png' : infoWinner.avatar} /> */}
            <p>{infoWinner?.namePlayer}</p>
            <p>{infoWinner?.points}</p>
        </div>
    );
};

export default DataPlayer;
